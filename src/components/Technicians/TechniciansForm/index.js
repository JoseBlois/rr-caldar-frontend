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
    firstName: technician.firstName || 'technicianFirstName1',
    lastName: technician.lastName || 'technicianLastName1',
    address: technician.address || 'technicianAddress1',
    phone: technician.phone || 'technicianPhone1',
    email: technician.email || 'technicianEmail1',
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
    value: 'Technician BT 1',
  }, {
    id: 'techBoilerType2',
    value: 'Technician BT 2',
  }, {
    id: 'techBoilerType3',
    value: 'Technician BT 3',
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
          <Select label="First Name:" name="firstName" value={state.firstName} onChange={onChangeInput} options={techFirstName} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Last Name:" name="lastName" value={state.lastName} onChange={onChangeInput} options={techLastName} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Address:" name="address" value={state.address} onChange={onChangeInput} options={techAddress} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Phone:" name="phone" value={state.phone} onChange={onChangeInput} options={techPhone} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Email:" name="email" value={state.email} onChange={onChangeInput} options={techEmail} />
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
