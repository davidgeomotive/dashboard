import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';

// core components
import Admin from 'layouts/Admin.js';

import 'assets/css/material-dashboard-react.css?v=1.9.0';

const hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={hist} basename='/'>
    <Switch>
      <Route path='/admin' component={Admin} />
      <Redirect exact from='/' to='/admin/team' />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
