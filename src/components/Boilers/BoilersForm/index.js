import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../sharedComponents/Button';
import Select from '../../sharedComponents/Select';
import styles from './boilersForm.module.css';

const BoilersForm = ({
  onSubmit,
  onClose,
  boiler,
}) => {
  const [state, setState] = useState({
    description: boiler.description || 'Boiler ...',
    boilerType: boiler.boilerType || 'boilerTypeId1',
    hourMaintenanceCost: boiler.hourMaintenanceCost || 0,
    hourEventualCost: boiler.hourEventualCost || 0,
    maintenanceRate: boiler.maintenanceRate || 'Weekly',
    // eslint-disable-next-line
    id: boiler._id,
  });

  const boilerTypes = [{
    id: 'boilerTypeId1',
    value: 'A',
  }, {
    id: 'boilerTypeId2',
    value: 'B',
  }, {
    id: 'boilerTypeId3',
    value: 'C',
  }, {
    id: 'boilerTypeId4',
    value: 'D',
  }];

  const maintenanceRate = [{
    value: 'Weekly',
  }, {
    value: 'Often',
  }, {
    value: 'Seldom',
  }, {
    value: 'Once',
  }, {
    value: 'Daily',
  }, {
    value: 'Yearly',
  }, {
    value: 'Never',
  }];

  const changeValue = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = () => {
    const boilerToSub = {
      description: state.description,
      boilerType: state.boilerType,
      hourMaintenanceCost: state.hourMaintenanceCost,
      hourEventualCost: state.hourEventualCost,
      maintenanceRate: state.maintenanceRate,
    };
    onSubmit(boilerToSub, state.id);
  };

  return (
    <div>
      <form className={styles.boilersFormContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" value={state.description} onChange={changeValue} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Boilers types:" name="boilerType" value={state.boilerType} onChange={changeValue} options={boilerTypes} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="hourMaintenanceCost">Hour Maintenance Cost</label>
          <input type="text" id="hourMaintenanceCost" name="hourMaintenanceCost" value={state.hourMaintenanceCost} onChange={changeValue} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="hourEventualCost">Hour Eventual Cost</label>
          <input type="text" id="hourEventualCost" name="hourEventualCost" value={state.hourEventualCost} onChange={changeValue} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Maintenance Rate:" name="maintenanceRate" value={state.maintenanceRate} onChange={changeValue} options={maintenanceRate} />
        </div>
        <div className={styles.buttonContainer}>
          <Button btnLabel="Cancel" onClick={onClose} />
          <Button btnLabel="Submit" primary onClick={submit} />
        </div>
      </form>
    </div>
  );
};

BoilersForm.defaultProps = {
  boiler: {},
};

BoilersForm.propTypes = {
  boiler: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default BoilersForm;
