import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../sharedComponents/Button';
import styles from './appointmentsForm.module.css';

const AppointmentsForm = ({
  onSubmit,
  onClose,
}) => {
  const [state, setState] = useState({
    building: 'buldingId1',
    technician: 'technicianId1',
    type: 'programmed',
    monthlyHours: 0,
  });

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className={styles.appointmentsFormContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="building">Building:</label>
          <select id="building" name="building" onChange={onChangeInput}>
            <option value="buldingId1">Building 1</option>
            <option value="buldingId2">Building 2</option>
          </select>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="technician">Technician:</label>
          <select id="technician" name="technician" onChange={onChangeInput}>
            <option value="technicianId1">Technician 1</option>
            <option value="technicianId2">Technician 2</option>
          </select>
        </div>
        <div className={styles.typeContainer}>
          <input type="radio" id="eventual" name="type" value="eventual" checked={Boolean(state.type === 'eventual')} onChange={onChangeInput} />
          <label htmlFor="eventual">Eventual</label>
          <input type="radio" id="programmed" name="type" value="programmed" checked={Boolean(state.type === 'programmed')} onChange={onChangeInput} />
          <label htmlFor="programmed">Programmed</label>
        </div>
        {state.type === 'programmed' && (
          <div className={styles.inputContainer}>
            <label htmlFor="monthlyHours">Monthly Hours</label>
            <input type="text" id="monthlyHours" name="monthlyHours" value={state.monthlyHours} onChange={onChangeInput} />
          </div>
        )}
        <div className={styles.buttonContainer}>
          <Button btnLabel="Cancel" onClick={onClose} />
          <Button btnLabel="Submit" primary onClick={() => onSubmit(state)} />
        </div>
      </form>
    </div>
  );
};

AppointmentsForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AppointmentsForm;
