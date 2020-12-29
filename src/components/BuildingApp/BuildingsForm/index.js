import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../sharedComponents/Button';
import styles from './BuildingsForm.module.css';

const BuildingsForm = ({
  onSubmit,
  onClose,
  building,
}) => {
  const [state, setState] = useState({
    name: building.name || 'Building name..',
    address: building.address || 'Building address',
    company: building.company || 'Building company',
    phone: building.phone || 'Building phone',
    boiler1: building.boilers[0] || '',
    boiler2: building.boilers[1],
    boiler3: building.boilers[2],
    // eslint-disable-next-line
    id: building._id,
  });

  const changeValue = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = () => {
    const buildingToSub = {
      name: state.name,
      address: state.address,
      company: state.company,
      phone: state.phone,
      boilers: [state.boiler1],
    };
    if (state.boiler2) {
      buildingToSub.boilers[1] = state.boiler2;
    }
    if (state.boiler3) {
      buildingToSub.boilers[2] = state.boiler3;
    }
    delete buildingToSub.boiler1;
    delete buildingToSub.boiler2;
    delete buildingToSub.boiler3;
    onSubmit(buildingToSub, state.id);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">
            Building Name
            <input value={state.name} onChange={changeValue} name="name" type="text" required />
          </label>
        </div>
        <div>
          <label htmlFor="address">
            Building Address
            <input value={state.address} onChange={changeValue} name="address" type="text" required />
          </label>
        </div>
        <div>
          <label htmlFor="company">
            Building Company
            <input value={state.company} onChange={changeValue} name="company" type="text" required />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Building Phone
            <input value={state.phone} onChange={changeValue} name="phone" type="text" required />
          </label>
        </div>
        <div>
          <label htmlFor="boiler1">
            Building Boiler 1
            <input value={state.boiler1} onChange={changeValue} name="boiler1" type="text" required />
          </label>
        </div>
        <div>
          <label htmlFor="boiler2">
            Building Boiler 2
            <input value={state.boiler2 || ''} onChange={changeValue} name="boiler2" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="boiler3">
            Building Boiler 3
            <input value={state.boiler3 || ''} onChange={changeValue} name="boiler3" type="text" />
          </label>
        </div>
        <div>
          <Button btnLabel="Cancel" onClick={onClose} />
          <Button btnLabel="Submit" primary onClick={submit} />
        </div>
      </form>
    </div>
  );
};

BuildingsForm.defaultProps = {
  building: {
    boilers: ['', '', ''],
  },
};

BuildingsForm.propTypes = {
  building: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default BuildingsForm;
