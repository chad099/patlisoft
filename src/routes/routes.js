import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from "../App";
import Home from '../components/Home';
import Login from '../components/Login';
import Services from '../components/Services';
import Project from '../components/Project';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Main = () => (
  <App>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/project' component={Project}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/team' component={Team}/>
      <Route exact path='/contact' component={Contact}/>
      
    </Switch>
  </App>
);

export default Main;