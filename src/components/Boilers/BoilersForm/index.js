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
    id: boiler.id,
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

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className={styles.boilersFormContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" value={state.description} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Boilers types:" name="boilerType" value={state.boilerType} onChange={onChangeInput} options={boilerTypes} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="hourMaintenanceCost">Hour Maintenance Cost</label>
          <input type="text" id="hourMaintenanceCost" name="hourMaintenanceCost" value={state.hourMaintenanceCost} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="hourEventualCost">Hour Eventual Cost</label>
          <input type="text" id="hourEventualCost" name="hourEventualCost" value={state.hourEventualCost} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <Select label="Maintenance Rate:" name="maintenanceRate" value={state.maintenanceRate} onChange={onChangeInput} options={maintenanceRate} />
        </div>
        <div className={styles.buttonContainer}>
          <Button btnLabel="Cancel" onClick={onClose} />
          <Button btnLabel="Submit" primary onClick={() => onSubmit(state)} />
        </div>
      </form>
    </div>
  );
};

BoilersForm.defaultProps = {
  boiler: {},
};

BoilersForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  boiler: PropTypes.object,
};

export default BoilersForm;
