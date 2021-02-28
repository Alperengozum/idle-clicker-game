import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory

} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import IdleGame from "./IdleGame";
import Start from "./Start";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path={"/home"} component={IdleGame}/>
          <Route exact path={"/"}>
            <Redirect from={"/"} to={"/home"}/>
          </Route>
          <Route exact path={"/start"} component={Start}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}


export default Router;