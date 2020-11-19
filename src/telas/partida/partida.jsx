import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { criarPartida } from '../../services/partida'
import './partida.css'


export function CriandoPartida() {

    const history = useHistory()
    const [partida, setPartida] = useState()

    function handleChange(evento) {
        const copia = { ...partida }
        copia[evento.target.name] = evento.target.value
        setPartida(copia)
    }

    async function criar(evento) {
        evento.preventDefault()
        await criarPartida(partida)
        history.push('/principal')
    }

    return <div className="partida">
        <h1 className="superior">Criar partida</h1>
        <input type="datetime-local" name="datetime" placeholder="Horário da partida" onChange={handleChange} />
        <input type="number" name="idTeamA" placeholder="ID time A" onChange={handleChange} />
        <input type="number" name="idTeamB" placeholder="ID time B" onChange={handleChange} />

        <div className="butCriar">
            <button type="button" onClick={criar}>Concluir</button>
        </div>

    </div>
}
