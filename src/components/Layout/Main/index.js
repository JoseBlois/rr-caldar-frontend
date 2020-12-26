import React from 'react';
import styles from './main.module.css';

const Main = ({ body }) => (
  <div className={styles.mainContainer}>
    {body}
  </div>
);

export default Main;
