import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './UpdateBuilding.css';

export default function UpdateBuilding({
  updateBuilding, searchBuilding, buildingId, toggleUpdateModal,
}) {
  const [building, setBuilding] = useState({
    name: '',
    address: '',
    company: '',
    boiler1: '',
    boiler2: '',
    boiler3: '',
    id: 1,
  });

  const changeValue = (e) => {
    setBuilding({ ...building, [e.target.id]: e.target.value });
  };

  const getBuilding = (wantedId) => {
    const foundBuilding = searchBuilding(wantedId);
    if (foundBuilding) {
      setBuilding({
        id: wantedId,
        ...foundBuilding,
        boiler1: foundBuilding.boilers[0],
        boiler2: foundBuilding.boilers[1],
        boiler3: foundBuilding.boilers[2],
      });
    } else {
      setBuilding({
        id: wantedId,
        name: 'Not Found',
        address: 'Not Found',
        company: 'Not Found',
        boiler1: 'Not Found',
        boiler2: 'Not Found',
        boiler3: 'Not Found',
      });
    }
  };

  useEffect(() => {
    getBuilding(buildingId);
  }, []);

  const submitUpdate = (e) => {
    e.preventDefault();
    const updatedBuilding = {
      id: building.id,
      name: building.name,
      address: building.address,
      company: building.company,
      boilers: [building.boiler1, building.boiler2, building.boiler3],
    };
    updateBuilding(updatedBuilding);
    toggleUpdateModal();
  };

  return (
    <div>
      <form className="edit-form" onSubmit={submitUpdate}>
        <div className="chosing-container">
          <h2>
            ID:
            {` ${buildingId}`}
          </h2>
        </div>
        <div className="inputs-container">
          <div className="form-group">
            <label htmlFor="name">
              Building Name:
              <input value={building.name || ''} name="edit-name" id="name" type="text" required onChange={changeValue} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="address">
              Building Address:
              <input value={building.address || ''} name="edit-address" id="address" type="text" required onChange={changeValue} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="company">
              Building Company:
              <input value={building.company || ''} name="edit-company" id="company" type="text" onChange={changeValue} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="boiler1">
              Building Boiler 1:
              <input value={building.boiler1 || ''} name="edit-boiler1" id="boiler1" type="text" required onChange={changeValue} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="boiler2">
              Building Boiler 2:
              <input value={building.boiler2 || ''} name="edit-boiler2" id="boiler2" type="text" onChange={changeValue} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="boiler3">
              Building Boiler 3:
              <input value={building.boiler3 || ''} name="edit-boiler3" id="boiler3" type="text" onChange={changeValue} />
            </label>
          </div>
        </div>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

UpdateBuilding.propTypes = {
  updateBuilding: PropTypes.func.isRequired,
  searchBuilding: PropTypes.func.isRequired,
  toggleUpdateModal: PropTypes.func.isRequired,
  buildingId: PropTypes.number.isRequired,
};
