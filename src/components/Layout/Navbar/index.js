import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout as logoutAction } from '../../../redux/actions/authActions';
import { LOGOUT_FULFILLED } from '../../../redux/types/authTypes';
import Button from '../../sharedComponents/Button';
import styles from './navbar.module.css';

const Navbar = ({
  logout,
  history,
}) => {
  const onLogoutClick = () => {
    logout().then((action) => {
      if (action.type === LOGOUT_FULFILLED) {
        history.push('/');
      }
    });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.headerNavbar}>
        CaldAR
      </div>
      <ul className={styles.navlist}>
        <li>
          <NavLink className={styles.link} activeClassName={styles.active} to="/buildings">Buildings</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} activeClassName={styles.active} to="/companies">Companies</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} activeClassName={styles.active} to="/boilers">Boilers</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} activeClassName={styles.active} to="/boilerTypes">Boiler Types</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} activeClassName={styles.active} to="/technicians">Technicians</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} activeClassName={styles.active} to="/appointments">Appointments</NavLink>
        </li>
      </ul>
      <div className={styles.logoutButtonContainer}>
        <Button type="submit" btnLabel="Logout" primary onClick={onLogoutClick} />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    logout: logoutAction,
  }, dispatch)
);

export default withRouter(connect(null, mapDispatchToProps)(Navbar));
