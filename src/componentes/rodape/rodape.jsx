import { AiFillGithub } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import './rodape.css'


export function Rodape() {
    return <footer className="rodape">
            <p>Produzido por Édson Ruan Goulart da Costa, novembro de 2020. </p>
        <div>
            <button className="github" ><a rel="noopener noreferrer" href="https://github.com/edsonrgdc" target="_blank" ><AiFillGithub /></a></button>
            <button className="facebook" ><a rel="noopener noreferrer" href="https://www.facebook.com/ruan.costa.35513800/" target="_blank" ><FiFacebook /></a></button>
            <button className="linkedin" ><a rel="noopener noreferrer" href="https://www.linkedin.com/in/edsonrgdc" target="_blank" ><AiFillLinkedin /></a></button>
            </div>
    </footer>
}