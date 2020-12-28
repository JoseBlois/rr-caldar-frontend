import React from 'react';
import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
