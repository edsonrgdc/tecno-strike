import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Cadastro from './cadastro/cadastro'
import Login from './login/tela.login'
import { ListarTimes } from './principal/principal'
import TelaPerfil from './perfil/tela.perfil'
import { Inicio } from './inicio/tela.inicio'
import { Times } from './time/times'
import Cabeçario from '../componentes/cabeçario/cabeçario'
import { Rodape } from '../componentes/rodape/rodape'
import { CriandoPartida } from './partida/partida'

function App() {
    return <div>
      
        <Router>
            <Cabeçario />

            <Switch>
                <Route exact path="/">
                    <Inicio />
                </Route>

                <Route path="/cadastro">
                    <Cadastro />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/inicio" >
                    <Inicio />
                </Route>

                <Route path="/principal">
                    <ListarTimes />
                </Route>

                <Route path="/perfil">
                    <TelaPerfil />
                </Route>

                <Route path="/times/:id">
                    <Times />
                </Route>

                <Route path="/partida">
                    <CriandoPartida />
                </Route>
            </Switch>

            <Rodape />

        </Router>
        
    </div>
}

export default App