import React from 'react';
import { NavLink } from 'react-router-dom';
import Boiler from '../boilerItem';
import styles from './Boilers.module.css';

export default function index({
  boilers, deleteBoiler, updateBoiler, searchBoiler,
}) {
  return (
    <div>
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
      <div className={styles.divAdd}>
        <NavLink to="/boilers/add" className={styles.link}>
          <button className={styles.btnAdd} type="button">Add New Boiler</button>
        </NavLink>
      </div>
    </div>
  );
}
