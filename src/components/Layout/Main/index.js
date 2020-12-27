import React from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.css';

const Main = ({ body }) => (
  <div className={styles.mainContainer}>
    {body}
  </div>
);

Main.propTypes = {
  body: PropTypes.object.isRequired,
};

export default Main;
