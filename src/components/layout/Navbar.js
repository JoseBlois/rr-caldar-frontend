import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from '../../css/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
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
    </nav>
  )
}
