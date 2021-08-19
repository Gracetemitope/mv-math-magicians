/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Calculator,  MathQuotes, Home} from './Pages'; 
import {NavBar} from './Component'
/* eslint-enable */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
      <React.Fragment>
        <Router>
          <NavBar/>
        <Switch>
        <Route path="/calculate" component={Calculator} />
        <Route path="/quotes" component={MathQuotes} />
        <Route path="/" component={Home} />
        </Switch>
       </Router>
      </React.Fragment>

  );
}

export default App;
