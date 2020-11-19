import { Link } from 'react-router-dom'
import { deletarTime } from '../../services/time'
import './time.css'

export function Time({ time, id }) {

    async function excluindo() {
        await deletarTime(time.id)
    }

    return <div className="time">
        <table>
            <tr>
                <th><img src={time.photo}></img></th>
                <th className="laranja">{time.name}</th>
            </tr>
            <tr>
                <td>ID {time.id}</td>
                <td>{time.members} Membros</td>
            </tr>
        </table>

        <button className="float" type="button" onClick={excluindo}>Excluir</button>

        <Link to={`/times/${time.id}`}>
            <button className="float" >Editar</button>
        </Link>
    </div>

}