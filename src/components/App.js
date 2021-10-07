import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/index.css';

//Importing Libraries
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextComponent } from '../contexts/authContext';
import AuthRouter from '../routeComponents/auth/AuthRouter';
//import PrivateRoute from '../routeComponents/auth/PrivateRoute';

//Importing components
import Navbar from './Navbar';
import NavBarResponsive from './NavBarResponsive';
import EditAd from './ad/EditAd';
import CreateAd from './ad/CreateAd';
import Home from '../routeComponents/Home';
import AdDetails from './ad-details/AdDetails';
import UserDetails from './user-details/User-details';
import EditProfile from './user-details/EditProfile';
import PetDelete from './user-details/PetDelete';
import DeleteAd from './ad/DeleteAd';
import Info from './Info';
import PetEdit from './user-details/PetEdit';
import PetCreate from './user-details/PetCreate';

//App Function

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <NavBarResponsive />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={AuthRouter} />
          <Route path='/detalhes-usuario/:id' component={UserDetails} />
          <Route path='/detalhes-anuncio/:id' component={AdDetails} />
        </Switch>
        <Route exact path='/adv/create' component={CreateAd} />
        <Route exact path='/adv/edit/:id' component={EditAd} />
        <Route path='/adv/delete/:id' component={DeleteAd} />
        <Route path='/edit-profile/:id' component={EditProfile} />
        <Route path='/pet-delete/:id' component={PetDelete} />
        <Route path='/info' component={Info} />
        <Route path='/pet-edit/:id' component={PetEdit} />
        <Route path='/pet-create' component={PetCreate} />
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
