import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Select from 'react-select';
import Button from '../../sharedComponents/Button';
import styles from './TechniciansForm.module.css';

const TechniciansForm = ({
  onSubmit,
  onClose,
  technician,
}) => {
  const boilerTypes = [{
    value: '5fcc1d06998cd913c71c7e01',
    label: 'Boiler type "A"',
  }, {
    value: '5fcc1d09998cd913c71c7e02',
    label: 'Boiler type "B"',
  }, {
    value: '5fcc1d0b998cd913c71c7e03',
    label: 'Boiler type "C"',
  }];

  const [state, setState] = useState({
    firstName: technician.firstName || '',
    lastName: technician.lastName || '',
    address: technician.address || '',
    phone: technician.phone || '',
    email: technician.email || '',
    birthday: moment(technician.dateOfBirth).format('YYYY-MM-DD') || '',
    monthlyCapacity: technician.monthlyCapacity || '',
    hourRate: technician.hourRate || '',
    boilerTypes: technician && technician.boilerTypes ? boilerTypes.filter(
      (boilerType) => technician.boilerTypes.includes(boilerType.value),
    ) : [],
    id: technician._id,
  });

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeDropdown = (selectedOptions) => {
    setState({
      ...state,
      boilerTypes: selectedOptions.map((option) => option.value),
    });
  };

  const submit = () => {
    const technicianToSub = {
      firstName: state.firstName,
      lastName: state.lastName,
      address: state.address,
      phone: state.phone,
      email: state.email,
      boilerTypes: state.boilerTypes,
      dateOfBirth: state.birthday,
      monthlyCapacity: state.monthlyCapacity,
      hourRate: state.hourRate,
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
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" name="birthday" value={state.birthday} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="monthlyCapacity">Monthly Capacity</label>
          <input type="text" id="monthlyCapacity" name="monthlyCapacity" value={state.monthlyCapacity} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="hourRate">Hour Rate</label>
          <input type="text" id="hourRate" name="hourRate" value={state.hourRate} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <Select
            defaultValue={state.boilerTypes}
            isMulti
            name="boilerTypes"
            options={boilerTypes}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={onChangeDropdown}
          />
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
