import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from "../App";
import Home from '../components/Home';
import Login from '../components/Login';
import Services from '../components/Services';
const Main = () => (
  <App>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/services' component={Services}/>
    </Switch>
  </App>
);

export default Main;