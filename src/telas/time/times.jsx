import { useState } from 'react'
import { Texto } from '../../componentes/texto/texto.componentes'
import { criarTime } from '../../services/time'
import { Editar } from './editar.time'
import { useHistory } from 'react-router-dom'
import './ajustes.css'

export function Times() {

    const [state, setState] = useState()
    const history = useHistory()

    function handleChange(evento) {
        const copia = { ...state }
        copia[evento.target.name] = evento.target.value
        setState(copia)
    }

    async function criar(event) {
        event.preventDefault()
        await criarTime(state)
        history.push('/principal')
    }

    return <form>
            <Editar />
        <div className="alinhamento2" >


            <h2 className="superior">Cadastrar time</h2>
            <Texto type="name" name="name" placeholder="Nome" onChange={handleChange} />
            <Texto type="text" name="description" placeholder="Descrição" onChange={handleChange} />
            <Texto type="number" name="members" placeholder="Membros" onChange={handleChange} />
            <Texto type="photo" name="photo" placeholder="Foto" onChange={handleChange} />

            <button className="alinhamentoButton" onClick={criar} type="button">Concluir</button>

        </div>
    </form>
}