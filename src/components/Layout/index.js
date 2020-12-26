import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';
import styles from './layout.module.css';

const Layout = ({
  children,
}) => (
  <div className={styles.layoutContainer}>
    <Navbar />
    <div className={styles.middleContainer}>
      <Header />
      <Main body={children} />
    </div>
  </div>
);

export default Layout;
