import { Link } from 'react-router-dom'

export function Botoes() {
    return <div className="quadrado">
        <Link to="/inicio">
            <button>Início</button>
        </Link>
        <Link to="/perfil">
            <button>Perfil</button>
        </Link>
        <Link to="/times/:id">
            <button>Times</button>
        </Link>
        <Link to="/partida">
            <button>Criar Partida</button>
        </Link>
    </div>
}