import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Companies from './components/Companies';
import Building from './components/Buildings';
import Technicians from './components/Technicians';
import BoilerTypes from './components/boilerTypes/BoilerTypesApp';
import Layout from './components/Layout';
import Appointments from './components/Appointments';
import Boilers from './components/Boilers';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/buildings" component={Building} />
          <Route path="/companies" component={Companies} />
          <Route path="/boilers" component={Boilers} />
          <Route path="/boilerTypes" component={BoilerTypes} />
          <Route path="/technicians" component={Technicians} />
          <Route path="/appointments" component={Appointments} />
          <Route exact path="/">
            <Redirect to="/buildings" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
