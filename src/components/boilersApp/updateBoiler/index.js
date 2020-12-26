import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './updateBoiler.module.css';

const UpdateBoiler = ({
  updateBoiler, searchBoiler, boilerId, toggleUpdateModal,
}) => {
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

  const getBoiler = (wantedId) => {
    const foundBoiler = searchBoiler(wantedId);
    setBoiler({
      id: wantedId,
      ...foundBoiler,
    });
  };

  useEffect(() => {
    getBoiler(boilerId);
  }, []);

  const submitUpdate = (e) => {
    e.preventDefault();
    const updatedBoiler = {
      id: boiler.id,
      description: boiler.description,
      boilerType: boiler.boilerType,
      hourMaintenanceCost: boiler.hourMaintenanceCost,
      hourEventualCost: boiler.hourEventualCost,
      maintenanceRate: boiler.maintenanceRate,
    };
    updateBoiler(updatedBoiler);
    toggleUpdateModal();
  };

  return (
    <form className={styles.updateForm} onSubmit={submitUpdate}>
      <div>
        <h4>
          Id:
          {` ${boilerId}`}
        </h4>
        <ul>
          <li className={styles.rows}>
            <label htmlFor="description" className={styles.label}>
              Description:
              <input type="text" id="description" placeholder="....." value={boiler.description} onChange={changeValue} required className={styles.input} />
            </label>
          </li>
          <li className={styles.rows}>
            <label htmlFor="boilerType" className={styles.label}>
              Boiler Type:
              <input type="text" id="boilerType" placeholder="....." value={boiler.boilerType} onChange={changeValue} required className={styles.input} />
            </label>
          </li>
          <li className={styles.rows}>
            <label htmlFor="hourMaintenanceCost" className={styles.label}>
              Hour Maintenance Cost:
              <input type="number" id="hourMaintenanceCost" placeholder="....." value={boiler.hourMaintenanceCost} onChange={changeValue} required className={styles.input} />
            </label>
          </li>
          <li className={styles.rows}>
            <label htmlFor="hourEventualCost" className={styles.label}>
              Hour Eventual Cost:
              <input type="number" id="hourEventualCost" placeholder="....." value={boiler.hourEventualCost} onChange={changeValue} required className={styles.input} />
            </label>
          </li>
          <li className={styles.rows}>
            <label htmlFor="maintenanceRate" className={styles.label}>
              Maintenance Rate:
              <input type="text" id="maintenanceRate" placeholder="....." value={boiler.maintenanceRate} onChange={changeValue} required className={styles.input} />
            </label>
          </li>
        </ul>
        <input type="submit" value="Update" />
      </div>
    </form>
  );
};

export default UpdateBoiler;

UpdateBoiler.propTypes = {
  updateBoiler: PropTypes.func.isRequired,
  searchBoiler: PropTypes.func.isRequired,
  toggleUpdateModal: PropTypes.func.isRequired,
  boilerId: PropTypes.number.isRequired,
};
