//Importing Libraries

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


//Importing components

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import { AuthContextComponent } from "../contexts/authContext";
import UserDetails from "../components/User-details/User-details"

//App Function

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/detalhes-cuidador" component={UserDetails} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
