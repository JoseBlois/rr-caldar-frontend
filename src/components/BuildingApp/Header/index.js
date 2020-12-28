import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className={styles.navBar}>
        <NavLink activeClassName={styles.active} className={styles.insideLink} exact to="/buildings/">List</NavLink>
        <NavLink activeClassName={styles.active} className={styles.insideLink} to="/buildings/add">Add</NavLink>
        <NavLink activeClassName={styles.active} className={styles.insideLink} to="/buildings/update">Update</NavLink>
      </nav>
    </header>
  );
}
