import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FaTwitch } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { CgYoutube } from 'react-icons/cg'
import { SiSteam } from 'react-icons/si'
import './redes.css'

export function Compartilhe() {
    return <div>

        <div className="compartilheAmor">
            <h3>Compartilhe o amor!</h3>
        </div>

        <div className="sociais">
            <button className="facebook"><a rel="noopener noreferrer" href="https://www.facebook.com/CounterStrike" target="_blank" ><FiFacebook /></a></button>
            <button className="instagram"><a rel="noopener noreferrer" href="https://www.instagram.com/csgo_dev/" target="_blank" ><FaInstagram /></a></button>
            <button className="twitch"><a rel="noopener noreferrer" href="https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive" target="_blank" ><FaTwitch /></a></button>
            <button className="twitter"><a rel="noopener noreferrer" href="https://twitter.com/csgo" target="_blank" ><FiTwitter /></a></button>
            <button className="youtube"><a rel="noopener noreferrer" href="https://www.youtube.com/channel/UC279mtSpGdNDRVE_NqSPofA/home" target="_blank" ><CgYoutube /></a></button>
            <button className="steam"><a rel="noopener noreferrer" href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank" ><SiSteam /></a></button>
        </div>
    </div>

}