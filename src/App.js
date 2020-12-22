import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import styles from './css/App.module.css';
import BuildingApp from './components/BuildingApp';
import TechniciansForm from './components/Technicians/TechniciansApp';

function App() {
  return (
    <Router>
      <div className="App">
        <div className={styles.wrapper}>
          <div className={styles.sideBar}>
            <Header />
            <Navbar />
          </div>
          <main className={styles.mainSection}>
            <Switch>
              <Route path="/buildings">
                <BuildingApp />
              </Route>
              <Route path="/companies">
                <h1>Companies</h1>
              </Route>
              <Route path="/boilers">
                <h1>Boilers</h1>
              </Route>
              <Route path="/boilerTypes">
                <h1>Boiler Types</h1>
              </Route>
              <Route path="/technicians">
                <h1>Technicians</h1>
                <TechniciansForm />
              </Route>
              <Route path="/appointments">
                <h1>Appointments</h1>
              </Route>
              <Route exact path="/">
                <Redirect to="/buildings" />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
