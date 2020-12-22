import React from 'react';
import BuildingItem from '../BuildingItem';
import styles from './Buildings.module.css';

export default function index({
  buildings, deleteBuilding, updateBuilding, searchBuilding,
}) {
  return (
    <div>
      <div className={styles.headersContainer}>
        <div className={styles.header}>NAME</div>
        <div className={styles.header}>ADDRESS</div>
        <div className={styles.header}>BOILERS</div>
        <div className={styles.header}>COMPANY</div>
        <div className={styles.header}>ID</div>
        <div>DELETE</div>
      </div>
      {buildings.map((building) =>
        // eslint-disable-next-line
        <BuildingItem
          deleteBuilding={deleteBuilding}
          key={building.id}
          building={building}
          updateBuilding={updateBuilding}
          searchBuilding={searchBuilding}
        />)}
    </div>
  );
}
