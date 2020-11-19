import { editarTime } from '../../services/time'
import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Texto } from '../../componentes/texto/texto.componentes'
import './ajustes.css'

export function Editar() {

    const history = useHistory()
    const params = useParams()
    const [atualizar, setAtualizar] = useState()

    function handleChange(event){
        const copia = {...atualizar}
        copia[event.target.name] = event.target.value
        setAtualizar(copia)
    }

    async function atualizaTime(event){
        event.preventDefault()
        await editarTime(atualizar, params.id)
        history.push('/principal')
    }


    return <div className="alinhamento">
        <h2 className="superior">Atualize um time</h2>
        
        <Texto type="name" name="name" placeholder="Nome" onChange={handleChange} />
        <Texto type="text" name="description" placeholder="Descrição" onChange={handleChange} />
        <Texto type="number" name="members" placeholder="Membros" onChange={handleChange} />
        <Texto type="photo" name="photo" placeholder="Logo" onChange={handleChange} />

        <button className="alinhamentoButton" onClick={atualizaTime}>Concluir</button>
    </div>
}