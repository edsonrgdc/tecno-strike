import React, { useState, useEffect } from 'react'
import Logo from './logo/logo.TecnoStrike.png'
import { perfil } from '../../services'
import './cabeçario.css'
import { Link } from 'react-router-dom'
import { sair } from '../../services/usuario'
import { AiFillHome } from 'react-icons/ai'
import { RiLogoutBoxLine } from 'react-icons/ri'

function Cabeçario() {

    const [state, setState] = useState()

    useEffect(async () => {
        setState(await perfil())
    }, [])

    return <div className="backgrounddiv" >
        {state ? (

            <div>
                <Link to="/perfil">
                <img className="usuario" src={state.photo} alt="Foto do usuário" />
                </Link>

                <Link to="/principal">
                <img className="logo" src={Logo} alt="Logo do site" />
                </Link>

                <Link to="/principal">
                    <button className="buttonsConectado" className="b1"><AiFillHome /></button>
                </Link>


                <button className="buttonsConectado" onClick={sair}><RiLogoutBoxLine /></button>

            </div>

        ) : (<div>

            <Link to="/principal">
            <img className="logo" src={Logo} alt="Logo do site" />
            </Link>

            <Link to="/login">
                <button className="buttonsDesconectado" className="b1">Conecte-se</button>
            </Link>

            <Link to="/cadastro">
                <button className="buttonsDesconectado" >Registre-se</button>
            </Link>
        </div>
            )}
    </div>
}

export default Cabeçario 