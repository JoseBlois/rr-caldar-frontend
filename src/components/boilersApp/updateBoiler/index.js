import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './updateBoiler.module.css';

export default function UpdateBoiler({
  updateBoiler, searchBoiler, boilerId, toggleUpdateModal,
}) {
  const [boiler, setBoiler] = useState({
    id: 1,
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
    if (foundBoiler) {
      setBoiler({
        id: wantedId,
        ...foundBoiler,
      });
    } else {
      setBoiler({
        id: wantedId,
        description: '',
        boilerType: '',
        hourMaintenanceCost: '',
        hourEventualCost: '',
        maintenanceRate: '',
      });
    }
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
    <div>
      <form className={styles.updateForm} onSubmit={submitUpdate}>
        <div>
          <h3>
            Id:
            {` ${boilerId}`}
          </h3>
          <ul>
            <li>
              <label htmlFor="description">
                Description:
                <input type="text" id="description" placeholder="....." value={boiler.description || ''} onChange={changeValue} required />
              </label>
            </li>
            <li>
              <label htmlFor="boilerType">
                Boiler Type:
                <input type="text" id="boilerType" placeholder="....." value={boiler.boilerType || ''} onChange={changeValue} required />
              </label>
            </li>
            <li>
              <label htmlFor="hourMaintenanceCost">
                Hour Maintenance Cost:
                <input type="number" id="hourMaintenanceCost" placeholder="....." value={boiler.hourMaintenanceCost || ''} onChange={changeValue} required />
              </label>
            </li>
            <li>
              <label htmlFor="hourEventualCost">
                Hour Eventual Cost:
                <input type="number" id="hourEventualCost" placeholder="....." value={boiler.hourEventualCost || ''} onChange={changeValue} required />
              </label>
            </li>
            <li>
              <label htmlFor="maintenanceRate">
                Maintenance Rate:
                <input type="number" id="maintenanceRate" placeholder="....." value={boiler.maintenanceRate || ''} onChange={changeValue} required />
              </label>
            </li>
          </ul>
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
}

UpdateBoiler.propTypes = {
  updateBoiler: PropTypes.func.isRequired,
  searchBoiler: PropTypes.func.isRequired,
  toggleUpdateModal: PropTypes.func.isRequired,
  boilerId: PropTypes.number.isRequired,
};
