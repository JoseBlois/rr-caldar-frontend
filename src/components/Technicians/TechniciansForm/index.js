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
    firstName: technician.firstName || 'Insert first name',
    lastName: technician.lastName || 'Insert last name',
    address: technician.address || 'Insert address',
    phone: technician.phone || 'Insert phone',
    email: technician.email || 'Insert email',
    boilerType: technician.boilerType || 'technicianBoilerType1',
    id: technician.id,
  });

  const techFirstName = [{
    id: 'techFirstName1',
    value: 'Technician First Name 1',
  }, {
    id: 'techFirstName2',
    value: 'Technician First Name 2',
  }, {
    id: 'techFirstName3',
    value: 'Technician First Name 3',
  }];

  const techLastName = [{
    id: 'techLastName1',
    value: 'Technician Last Name 1',
  }, {
    id: 'techLlastName2',
    value: 'Technician Last Name 2',
  }, {
    id: 'techLlastName3',
    value: 'Technician Last Name 3',
  }];

  const techAddress = [{
    id: 'techAddress1',
    value: 'Technician Address 1',
  }, {
    id: 'techAddress2',
    value: 'Technician Address 2',
  }, {
    id: 'techAddress3',
    value: 'Technician Address 3',
  }];

  const techPhone = [{
    id: 'techPhone1',
    value: 'Technician Phone 1',
  }, {
    id: 'techPhone2',
    value: 'Technician Phone 2',
  }, {
    id: 'techPhone3',
    value: 'Technician Phone 3',
  }];

  const techEmail = [{
    id: 'techEmail1',
    value: 'Technician Email 1',
  }, {
    id: 'techEmail2',
    value: 'Technician Email 2',
  }, {
    id: 'techEmail3',
    value: 'Technician Email 3',
  }];

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

  return (
    <div>
      <form className={styles.techniciansFormContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={state.firstName} onChange={onChangeInput} options={techFirstName} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={state.lastName} onChange={onChangeInput} options={techLastName} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={state.address} onChange={onChangeInput} options={techAddress} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" value={state.phone} onChange={onChangeInput} options={techPhone} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={state.email} onChange={onChangeInput} options={techEmail} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Boiler Type:" name="boilerType" value={state.boilerType} onChange={onChangeInput} options={techBoilerType} />
        </div>
        <div className={styles.buttonContainer}>
          <Button btnLabel="Cancel" onClick={onClose} />
          <Button btnLabel="Submit" primary onClick={() => onSubmit(state)} />
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
