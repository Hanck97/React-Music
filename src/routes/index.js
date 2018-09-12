import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/Home/Index';


const Routes = () => (
  <div className="app">

    <Router>
      <Switch>
        <Route path="/" exact component={Home} />

      </Switch>
    </Router>
  </div>
);


export default Routes;
