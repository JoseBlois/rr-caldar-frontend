import React from 'react';
import styles from './appointments.module.css';

const Appointments = () => (
  <div className={styles.appointmentsContainer}>
    <table className={styles.appointmentsTable}>
      <thead>
        <tr>
          <th>Building</th>
          <th>Technician</th>
          <th>Monthly hours</th>
          <th className={styles.actionsRow}>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name building</td>
          <td>Name Technician</td>
          <td>Number of hours</td>
          <td>Actions</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Appointments;
