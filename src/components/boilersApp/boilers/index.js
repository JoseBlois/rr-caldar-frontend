import React from 'react';
import Boiler from '../boilerItem';
import styles from './Boilers.module.css';

export default function index({
  boilers, deleteBoiler, updateBoiler, searchBoiler,
}) {
  return (
    <div>
      <table className={styles.tableHeader}>
        <caption className={styles.tableCaption}>Boilers Records</caption>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Boiler Type</th>
            <th>Hour Maintenance Cost</th>
            <th>Hour Eventual Cost</th>
            <th>Maintenance Rate</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {boilers.map((boiler) =>
            // eslint-disable-next-line
            <Boiler deleteBoiler={deleteBoiler} key={boiler.id} boiler={boiler} updateBoiler={updateBoiler} searchBoiler={searchBoiler} />)}
        </tbody>
      </table>
    </div>
  );
}
