import React from 'react';
import { Route } from 'react-router-dom';
import Buildings from './Buildings';
import styles from './BuildingApp.module.css';

export default function BuildingAppF() {
  return (
    <>
      <div className={styles.container}>
        <Route exact path="/buildings/">
          <Buildings />
        </Route>
      </div>
    </>
  );
}
