//Importing Libraries

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


//Importing components

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import { AuthContextComponent } from "../contexts/authContext";
import UserDetails from "../components/User-details/User-details"
import AdDetails from "../components/Ad-details/AdDetails"

//App Function

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/detalhes-cuidador/:id" component={UserDetails} />
          <Route path="/detalhes-anuncio/:id" component={AdDetails} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
