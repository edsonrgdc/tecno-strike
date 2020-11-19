import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { entrar } from '../../services/usuario'
import Texto from '../../componentes/texto/texto.componentes'
import './login.css'
import swal from 'sweetalert';
import { render } from '@testing-library/react'

function TelaLogin() {

    const history = useHistory()
    const [usuario, setUsuario] = useState({})

    function handleChange(event) {
        const copia = { ...usuario }
        copia[event.target.name] = event.target.value
        setUsuario(copia)
    }

    async function vamosEntrar(evento) {
        evento.preventDefault()
        await entrar(usuario)
        history.push('/principal')
    }

    return <form className="login">
        <Texto type="email" placeholder="Email" name="username" onChange={handleChange} />
        <Texto type="password" placeholder="Senha" name="password" onChange={handleChange} />

        <div>
            <button className="butlog" onClick={vamosEntrar}>Concluir</button>
        </div>

    </form>
}

export default TelaLogin