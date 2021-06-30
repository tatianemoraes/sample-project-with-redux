import React from 'react';
import Home from '../Home/index';
import Repositories from '../Repositories/index';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

export default function Routes() {
  return  (
    <Router>
      <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/repositories' component={ Repositories }/>
      </Switch>
    </Router>
  )
}