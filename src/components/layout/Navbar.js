import React from 'react'
import {Link} from 'react-router-dom';
import styles from '../../App.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        <li>
          <Link className={styles.link} to="/buildings">Buildings</Link>
        </li>
        <li>
          <Link className={styles.link} to="/companies">Companies</Link>
        </li>
        <li>
          <Link className={styles.link} to="/boilers">Boilers</Link>
        </li>
        <li>
          <Link className={styles.link} to="/boilerTypes">Boiler Types</Link>
        </li>
        <li>
          <Link className={styles.link} to="/technicians">Technicians</Link>
        </li>
        <li>
          <Link className={styles.link} to="/appointments">Appointments</Link>
        </li>
      </ul>
    </nav>
  )
}
