import { useState, useEffect } from 'react'
import { buscarTimes } from '../../services/time'
import { buscarPartida } from '../../services/partida'
import { Time } from '../../componentes/time/time.componentes'
import { Partida } from '../../componentes/partidas/partidas'
import { FundoEstatico } from '../../componentes/estatico/estaticos'
import { Compartilhe } from '../../componentes/redes/redes'
import { Botoes } from '../../componentes/cabeçario/botoes'
import './principal.css'

export function ListarTimes() {

    const [times, setTimes] = useState([])
    const [partidas, setPartidas] = useState([])

    useEffect(async () => {
        const promiseTimes = buscarTimes()
        const promisePartidas = buscarPartida()
        const respostaTimes = await promiseTimes
        const respostaPartidas = await promisePartidas
        setPartidas(respostaPartidas.content)
        setTimes(respostaTimes.content)
    }, [])

    return <div>
        <Botoes />
        <FundoEstatico />
        <Compartilhe />

        <div className="coluna1">
                <h3>Times</h3>
            {
                times.map((time) => (
                    <Time key={time.id} time={time} />
                ))
            }
        </div>

        <div className="coluna2">
                <h3>Partidas</h3>
            {
                partidas.map(
                    (partida) => (<Partida key={partida.id} datetime={partida.datetime} teamA={partida.teamA} teamB={partida.teamB} />))
            }
        </div>
    </div >
}


