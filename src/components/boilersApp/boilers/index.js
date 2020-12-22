import React from 'react';
import Boiler from '../boilerItem';
import styles from './Boilers.module.css';

export default function index({
  boilers, deleteBoiler, updateBoiler, searchBoiler,
}) {
  return (
    <div>
      <div className={styles.headersContainer}>
        <div className={styles.header}>Description</div>
        <div className={styles.header}>Boiler Type</div>
        <div className={styles.header}>Hour Maintenance Cost</div>
        <div className={styles.header}>Hour Eventual Cost</div>
        <div className={styles.header}>Maintenance Rate</div>
        <div className={styles.header}>Update</div>
        <div>Delete</div>
      </div>
      {boilers.map((boiler) =>
        // eslint-disable-next-line
        <Boiler deleteBoiler={deleteBoiler} key={boiler.id} boiler={boiler} updateBoiler={updateBoiler} searchBoiler={searchBoiler} />)}
    </div>
  );
}
