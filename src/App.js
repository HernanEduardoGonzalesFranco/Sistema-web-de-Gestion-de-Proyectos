// Esta es la importacion de BrowserRouter el cual sirve para poder hacer el llamado con el switch//
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Cuenta from './componentes/autentificacion/Cuenta';
import Login from './componentes/autentificacion/Login';
import Proyectos from './componentes/proyectos/Proyectos';
function App() {
  return (
    <Router>
      <Switch>
        {/* El route sirve para escoger lo que le usuario desea hacer */}
        <Route exact path="/" component={Login}/>
        <Route exact path="/cuenta" component={Cuenta}/>
        <Route exact path="/proyectos" component={Proyectos}/>
      </Switch>
    </Router>
    );
  }

export default App;
