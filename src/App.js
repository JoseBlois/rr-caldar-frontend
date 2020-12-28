import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Companies from './components/Companies/Companies';
import BoilersApp from './components/boilersApp';
import BuildingApp from './components/BuildingApp';
import TechniciansMain from './components/Technicians/TechniciansMain';
import BoilerTypesApp from './components/boilerTypes/BoilerTypesApp';
import Layout from './components/Layout';
import Appointments from './components/Appointments';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/buildings" component={BuildingApp} />
          <Route path="/companies" component={Companies} />
          <Route path="/boilers" component={BoilersApp} />
          <Route path="/boilerTypes" component={BoilerTypesApp} />
          <Route path="/technicians" component={TechniciansMain} />
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
