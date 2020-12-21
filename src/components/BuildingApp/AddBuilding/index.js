import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddBuilding(props) {
  const [building, setBuilding] = useState({
    name: '',
    address: '',
    company: '',
    boiler1: '',
    boiler2: '',
    boiler3: '',
  });

  const changeValue = (e) => {
    setBuilding({ ...building, [e.target.name]: e.target.value });
  };

  const submition = (e) => {
    e.preventDefault();
    const newBuilding = {
      name: building.name,
      address: building.address,
      company: building.company,
      boilers: [building.boiler1, building.boiler2, building.boiler3],
    };
    props.addBuilding(newBuilding);
    setBuilding({
      name: '',
      address: '',
      company: '',
      boiler1: '',
      boiler2: '',
      boiler3: '',
    });
  };

  return (
    <div>
      <div className="add-form-container">
        <h2>Add building panel</h2>
        <form className="add-form" onSubmit={submition}>
          <div className="form-group">
            <label htmlFor="name">
              Building Name
              <input value={building.name} onChange={changeValue} name="name" pe="text" required />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="address">
              Building Address
              <input value={building.address} onChange={changeValue} name="address" type="text" required />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="company">
              Building Company
              <input value={building.company} onChange={changeValue} name="company" type="text" required />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="boiler1">
              Building Boiler 1
              <input value={building.boiler1} onChange={changeValue} name="boiler1" type="text" required />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="boiler2">
              Building Boiler 2
              <input value={building.boiler2} onChange={changeValue} name="boiler2" type="text" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="boiler3">
              Building Boiler 3
              <input value={building.boiler3} onChange={changeValue} name="boiler3" type="text" />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

AddBuilding.propTypes = {
  addBuilding: PropTypes.func.isRequired,
};
