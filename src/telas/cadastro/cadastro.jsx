import React, { useState, } from 'react'
import { cadastrar } from '../../services/index'
import Texto from '../../componentes/texto/texto.componentes'
import { Link } from 'react-router-dom'
import './cadastro.css'

function Cadastro() {

    const [usuario, cadastrarUsuario] = useState([])

    function handleChange(event) {
        const copia = { ...usuario }
        copia[event.target.name] = event.target.value
        cadastrarUsuario(copia)
    }

    async function salvar() {
        await cadastrar(usuario)
    }

    return <div className="cadastroBorda">
    <form className="cadastro">
            
            <Texto type="name" placeholder="Nome" name="name" onChange={handleChange} />
            <Texto type="email" placeholder="Email" name="email" onChange={handleChange} />
            <Texto type="password" placeholder="Senha" name="password" onChange={handleChange} />
            <Texto type="text" placeholder="Descrição" name="description" onChange={handleChange} />
            <Texto type="tel" placeholder="Telefone" name="phone" onChange={handleChange} />
            <Texto type="text" placeholder="Foto" name="photo" onChange={handleChange} />
            
        
           
            <Link to="/login">
                <button className="botao" type="button" onClick={salvar}>Concluir</button>
            </Link>

    </form>
    </div>
}

export default Cadastro