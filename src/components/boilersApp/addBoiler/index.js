import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './addBoiler.module.css';

export default function addBoiler(props) {
  const [boiler, setBoiler] = useState({
    id: '',
    description: '',
    boilerType: '',
    hourMaintenanceCost: '',
    hourEventualCost: '',
    maintenanceRate: '',
  });

  const changeValue = (e) => {
    setBoiler({ ...boiler, [e.target.id]: e.target.value });
  };

  const submition = (e) => {
    e.preventDefault();
    const newBoiler = {
      id: '',
      description: boiler.description,
      boilerType: boiler.boilerType,
      hourMaintenanceCost: boiler.hourMaintenanceCost,
      hourEventualCost: boiler.hourEventualCost,
      maintenanceRate: boiler.maintenanceRate,
    };
    props.addBoiler(newBoiler);
    setBoiler({
      id: '',
      description: '',
      boilerType: '',
      hourMaintenanceCost: '',
      hourEventualCost: '',
      maintenanceRate: '',
    });
  };

  return (
    <>
      <form className={styles.addForm} onSubmit={submition}>
        <div className={styles.addNewDiv}>
          <h3 className={styles.addNewTitle}>
            Add new boiler
          </h3>
          <ul>
            <li className={styles.rows}>
              <label htmlFor="description" className={styles.label}>
                Description:
                <input className={styles.input} type="text" id="description" placeholder="....." value={boiler.description} onChange={changeValue} required />
              </label>
            </li>
            <li className={styles.rows}>
              <label htmlFor="boilerType" className={styles.label}>
                Boiler Type:
                <input className={styles.input} type="text" id="boilerType" placeholder="....." value={boiler.boilerType} onChange={changeValue} required />
              </label>
            </li>
            <li className={styles.rows}>
              <label htmlFor="hourMaintenanceCost" className={styles.label}>
                Hour Maintenance Cost:
                <input className={styles.input} type="number" id="hourMaintenanceCost" placeholder="....." value={boiler.hourMaintenanceCost} onChange={changeValue} required />
              </label>
            </li>
            <li className={styles.rows}>
              <label htmlFor="hourEventualCost" className={styles.label}>
                Hour Eventual Cost:
                <input className={styles.input} type="number" id="hourEventualCost" placeholder="....." value={boiler.hourEventualCost} onChange={changeValue} required />
              </label>
            </li>
            <li className={styles.rows}>
              <label htmlFor="maintenanceRate" className={styles.label}>
                Maintenance Rate:
                <input className={styles.input} type="number" id="maintenanceRate" placeholder="....." value={boiler.maintenanceRate} onChange={changeValue} required />
              </label>
            </li>
          </ul>
          <input type="submit" value="Submit" className={styles.inputSubmit} />
        </div>
      </form>
    </>
  );
}

addBoiler.propTypes = {
  addBoiler: PropTypes.func.isRequired,
};
