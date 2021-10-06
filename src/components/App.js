import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/index.css';

//Importing Libraries
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextComponent } from '../contexts/authContext';
import AuthRouter from '../routeComponents/auth/AuthRouter';
//import PrivateRoute from '../routeComponents/auth/PrivateRoute';

//Importing components
import Navbar from './Navbar';
import EditAd from './ad/EditAd';
import CreateAd from './ad/CreateAd';
import Home from '../routeComponents/Home';
import AdDetails from './ad-details/AdDetails';
import UserDetails from './user-details/User-details';

//App Function

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={AuthRouter} />
          <Route path='/detalhes-usuario/:id' component={UserDetails} />
          <Route path='/detalhes-anuncio/:id' component={AdDetails} />
        </Switch>
        <Route exact path='/adv/create' component={CreateAd} />
        <Route exact path='/adv/edit/:id' component={EditAd} />
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
