import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import styles from './App.module.css';

function App() {
  console.log(styles);
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
              <h1>Buildings</h1>
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
