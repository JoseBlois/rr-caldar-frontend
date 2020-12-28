import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => (
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
  </div>
);

export default Navbar;
