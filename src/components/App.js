import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/index.css';

import Home from '../routeComponents/Home';
import AuthRouter from '../routeComponents/auth/AuthRouter';
//import PrivateRoute from '../routeComponents/auth/PrivateRoute';

import { AuthContextComponent } from '../contexts/authContext';

import Navbar from './Navbar';
import CreateAd from './ad/CreateAd';

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={AuthRouter} />
        </Switch>
        <Route exact path='/adv/create' component={CreateAd} />
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
