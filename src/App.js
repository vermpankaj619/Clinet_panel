import React, { Component } from 'react';
import {BrowserRouter as Router , Route ,Switch  } from "react-router-dom";
import {UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth';

import {Provider} from "react-redux";
import store from './store';
import AppHeader from './components/layouts/AppHeader';
import Dashboard from './components/layouts/Dashboard';
import AddClients from './components/clients/AddClients';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/Auth/Login'
import Settings from "./components/Setting/Settings";
import Register from './components/Auth/Register';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <div className="container">
        
      
      <AppHeader/>
      <Switch>
                <Route
                  exact
                  path="/"
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path="/client/add"
                  component={UserIsAuthenticated(AddClients)}
                />
                <Route
                  exact
                  path="/client/edit/:id"
                  component={UserIsAuthenticated(EditClient)}
                />
                <Route
                  exact
                  path="/client/:id"
                  component={UserIsAuthenticated(ClientDetails)}
                />
                <Route
                  exact
                  path="/login"
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path="/register"
                  component={UserIsNotAuthenticated(Register)}
                />
                <Route
                  exact
                  path="/settings"
                  component={UserIsAuthenticated(Settings)}
                />
              </Switch>
      </div>
      
      </div>
      </Router>
      </Provider>
      
     
    );
  }
}

export default App;
