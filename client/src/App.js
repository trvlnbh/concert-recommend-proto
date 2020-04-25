import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import ScrollUpButton from "react-scroll-up-button";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/layout/Dashboard";
import ShowList from "./components/show/ShowList";
import TestAddShow from "./components/show/test-AddShow";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {

    return (
      <Provider store={store} >
        <Router>
          <div className="App">
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/" component={Navbar} />
            </Switch>

            <Route exact path="/" component={Landing} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Landing} />
              <PrivateRoute exact path="/dashboard/show" component={ShowList} />
              <PrivateRoute exact path="/dashboard/test" component={TestAddShow} />
            </Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/show" component={ShowList} />
          </div>
          <ScrollUpButton />
        </Router>
      </Provider>
    );
  }
}

export default App;
