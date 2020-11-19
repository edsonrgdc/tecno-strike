import moment from 'moment'
import './partidas.principal.css'

export function Partida({ datetime, teamA, teamB }) {
    return <div>
        <table className="duelo">
            <tr>
                <th>
                    <div>
                    <img src={teamA.photo} alt="Foto time A" />
                    </div>
                </th>
                <th>
                    <p>vs</p>
                </th>
                <th>
                    <div>
                    <img src={teamB.photo} alt="Foto time B" />
                    </div>
                </th>
            </tr>
            <tr>
                <div className="data">
                <td>
                    {moment.utc(datetime).format("MMMM/do/YYYY HH:mm:ss a")}
                </td>
                </div>
            </tr>
        </table>
    </div>
}
