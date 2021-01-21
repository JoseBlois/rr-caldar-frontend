import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAuthentication as setAuthenticationAction } from './redux/actions/authActions';
import { tokenListener } from './firebase';
import Companies from './components/Companies';
import Building from './components/Buildings';
import Technicians from './components/Technicians';
import BoilerTypes from './components/boilerTypes';
import Layout from './components/Layout';
import Appointments from './components/Appointments';
import Boilers from './components/Boilers';
import Login from './components/Login';

const App = ({
  authenticated,
  setAuthentication,
}) => {
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      setAuthentication();
    }
  }, [setAuthentication]);

  useEffect(() => {
    tokenListener();
  }, []);

  if (authenticated) {
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
            <Route exact path="/login">
              <Redirect path="/login" to="/buildings" />
            </Route>
          </Switch>
        </Layout>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect path="/" to="/login" />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  setAuthentication: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setAuthentication: setAuthenticationAction,
}, dispatch);

export default connect(mapStateToProp, mapDispatchToProps)(App);
