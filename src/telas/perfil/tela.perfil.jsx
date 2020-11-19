import { useState, useEffect } from 'react'
import { perfil } from '../../services'
import './perfil.css'

function TelaPerfil() {

    const [state, setState] = useState()

    useEffect(async () => {
        setState(await perfil())
    }, [])

    return <div className="completo">

        {state ? (

            <div className="backgroundPerfil">

                <img className="fotoperfil" src={state.photo} alt="Foto do usuário" /><br />

                <h3>{state.name}</h3><br />

                <div className="divSpan">
                    <span>Email: {state.email}</span><br />
                    <span>Telefone: {state.phone}</span><br />
                    <span>Descrição: {state.description}</span><br />
                </div>

            </div>
        ) : (
                <p>Registre-se ou entre na sua conta para visualizar as demais informações.</p>
            )}
    </div>
}

export default TelaPerfil