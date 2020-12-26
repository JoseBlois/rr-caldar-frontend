import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({
  location,
}) => {
  const headerText = location.pathname.split('/')[1];
  return (
    <div className={styles.headerContainer}>
      {headerText}
    </div>
  );
};

export default withRouter(Header);
