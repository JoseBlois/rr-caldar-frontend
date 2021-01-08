import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Companies from './components/Companies/Companies';
import BuildingApp from './components/BuildingApp';
import Technicians from './components/Technicians';
import BoilerTypesApp from './components/boilerTypes/BoilerTypesApp';
import Layout from './components/Layout';
import Appointments from './components/Appointments';
import Boilers from './components/Boilers';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/buildings" component={BuildingApp} />
          <Route path="/companies" component={Companies} />
          <Route path="/boilers" component={Boilers} />
          <Route path="/boilerTypes" component={BoilerTypesApp} />
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
