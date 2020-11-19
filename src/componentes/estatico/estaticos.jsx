import estatico from './fotos/banner.jpg'
import primeira from './fotos/primeira.png'
import segunda from './fotos/segunda.png'
import terceira from './fotos/terceira.png'
import './estatico.css'

export function FundoEstatico() {
    return <div>

        <div className="pai">
                <img src={primeira} alt="Enfeite1" />
                <img src={segunda} alt="Enfeite2" />
                <img src={terceira} alt="Enfeite3" />
        </div>



        <div className="divVideo">
            <iframe title="Video" className="video" src="https://www.youtube.com/embed/Rd3Uc8Nr0vA?frameborder=1&autoplay=1&muted=1"></iframe>
        </div>


        <div className="site">
            <button><a target="_blank" rel="noopener noreferrer" href="https://blog.counter-strike.net/pt-br/">Counter Strike: Global Offensive</a></button>
        </div>
    </div>
} 
