import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './addBoiler.module.css';

export default function addBoiler(props) {
  const [boiler, setBoiler] = useState({
    description: '',
    boilerType: '',
    hourMaintenanceCost: '',
    hourEventualCost: '',
    maintenanceRate: '',
  });

  const changeValue = (e) => {
    setBoiler({ ...boiler, [e.target.description]: e.target.value });
  };

  const submition = (e) => {
    e.preventDefault();
    const newBoiler = {
      description: boiler.description,
      boilerType: boiler.boilerType,
      hourMaintenanceCost: boiler.hourMaintenanceCost,
      hourEventualCost: boiler.hourEventualCost,
      maintenanceRate: boiler.maintenanceRate,
    };
    props.addBoiler(newBoiler);
    setBoiler({
      description: '',
      boilerType: '',
      hourMaintenanceCost: '',
      hourEventualCost: '',
      maintenanceRate: '',
    });
  };

  return (
    <div className={styles.addFormContainer}>
      <form className={styles.addForm} onSubmit={submition}>
        <div>
          <h3>
            Add new boiler
          </h3>
          <ul>
            <li>
              <label htmlFor="description">
                Description:
                <input type="text" id="description" placeholder="....." value={boiler.description} onChange={changeValue} required />
              </label>
            </li>
            <li>
              <label htmlFor="boilerType">
                Boiler Type:
                <input type="text" id="boilerType" placeholder="....." value={boiler.boilerType} onChange={changeValue} required />
              </label>
            </li>
            <li>
              <label htmlFor="hourMaintenanceCost">
                Hour Maintenance Cost:
                <input type="number" id="hourMaintenanceCost" placeholder="....." value={boiler.hourMaintenanceCost} onChange={changeValue} required />
              </label>
            </li>
            <li>
              <label htmlFor="hourEventualCost">
                Hour Eventual Cost:
                <input type="number" id="hourEventualCost" placeholder="....." value={boiler.hourEventualCost} onChange={changeValue} required />
              </label>
            </li>
            <li>
              <label htmlFor="maintenanceRate">
                Maintenance Rate:
                <input type="number" id="maintenanceRate" placeholder="....." value={boiler.maintenanceRate} onChange={changeValue} required />
              </label>
            </li>
          </ul>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

addBoiler.propTypes = {
  addBoiler: PropTypes.func.isRequired,
};
