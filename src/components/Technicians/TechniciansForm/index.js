import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../sharedComponents/Button';
import Select from '../../sharedComponents/Select';
import styles from './TechniciansForm.module.css';

const TechniciansForm = ({
  onSubmit,
  onClose,
  technician,
}) => {
  const [state, setState] = useState({
    firstName: technician.firstName || '',
    lastName: technician.lastName || '',
    address: technician.address || '',
    phone: technician.phone || '',
    email: technician.email || '',
    boilerType: technician.boilerType || '',
    id: technician.id,
  });

  const techBoilerType = [{
    id: 'techBoilerType1',
    value: 'Boiler type "A"',
  }, {
    id: 'techBoilerType2',
    value: 'Boiler type "B"',
  }, {
    id: 'techBoilerType3',
    value: 'Boiler type "C"',
  }, {
    id: 'techBoilerType4',
    value: 'Boiler type "D"',
  }];

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    const technicianToSub = {
      firstName: state.firstName,
      lastName: state.lastName,
      address: state.address,
      phone: state.phone,
      email: state.email,
      boilerType: state.boilerType,
    };
    onSubmit(technicianToSub, state.id);
  };

  return (
    <div>
      <form className={styles.techniciansFormContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={state.firstName} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={state.lastName} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={state.address} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" value={state.phone} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={state.email} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Boiler Type:" name="boilerType" value={state.boilerType} onChange={onChangeInput} options={techBoilerType} />
        </div>
        <div className={styles.buttonContainer}>
          <Button btnLabel="Cancel" onClick={onClose} />
          <Button btnLabel="Submit" primary onClick={() => submit()} />
        </div>
      </form>
    </div>
  );
};

TechniciansForm.defaultProps = {
  technician: {},
};

TechniciansForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  technician: PropTypes.object,
};

export default TechniciansForm;
