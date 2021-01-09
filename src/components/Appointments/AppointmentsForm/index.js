import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../sharedComponents/Button';
import Select from '../../sharedComponents/Select';
import styles from './appointmentsForm.module.css';

const AppointmentsForm = ({
  onSubmit,
  onClose,
  appointment,
}) => {
  console.log(appointment);

  const [state, setState] = useState({
    building: appointment.building || 'buldingId1',
    technician: appointment.technician || 'technicianId1',
    type: appointment.type || 'programmed',
    monthlyHours: appointment.monthlyHours || 0,
    id: appointment._id,
    boiler: '5fed434d3dfddb0017b873ec',
  });

  const buildings = [{
    id: '5febbb2b46e8d9001706da15',
    value: 'Building 1',
  }, {
    id: '5ff136e0462c1000178c51fa',
    value: 'Building 2',
  }];

  const technicians = [{
    id: '5ff61c65e239ae0017facff0',
    value: 'Technician 1',
  }, {
    id: '5ff61c65e239ae0017facff0',
    value: 'Technician 2',
  }];

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
          <Select label="Building:" name="building" value={state.building} onChange={onChangeInput} options={buildings} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Technician:" name="technician" value={state.technician} onChange={onChangeInput} options={technicians} />
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
          <Button
            btnLabel="Submit"
            primary
            onClick={() => {
              // console.log(state);
              onSubmit(state);
            }}
          />
        </div>
      </form>
    </div>
  );
};

AppointmentsForm.defaultProps = {
  appointment: {},
};

AppointmentsForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  appointment: PropTypes.object,
};

export default AppointmentsForm;
