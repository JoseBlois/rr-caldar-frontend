import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAuthentication } from './redux/actions/authActions';
import Companies from './components/Companies2/index';
import BuildingApp from './components/Buildings';
import Technicians from './components/Technicians';
import BoilerTypes from './components/boilerTypes/BoilerTypesApp';
import Layout from './components/Layout';
import Appointments from './components/Appointments';
import Boilers from './components/Boilers';
import Login from './components/Login/Login';

const LOCAL_STORE = window.localStorage;

const App = ({ authenticated }) => {
  useEffect(() => {
    const token = LOCAL_STORE.getItem('token');
    if (token) {
      setAuthentication();
    }
  }, [setAuthentication]);

  if (authenticated) {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/buildings" component={BuildingApp} />
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

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/buildings" component={BuildingApp} />
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
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect path="/" to="/login" />
      </Switch>
    </Router>
  );
};

const mapStateToProp = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProp)(App);
