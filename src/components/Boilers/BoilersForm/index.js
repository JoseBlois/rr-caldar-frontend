import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../sharedComponents/Button';
import styles from './boilersForm.module.css';

const BoilersForm = ({
  onSubmit,
  onClose,
  boiler,
}) => {
  const [state, setState] = useState({
    description: boiler.description || 'Boiler Nº ....',
    boilerType: boiler.boilerType || '5fcc1d06998cd913c71c7e01',
    hourMaintenanceCost: boiler.hourMaintenanceCost || 0,
    hourEventualCost: boiler.hourEventualCost || 0,
    maintenanceRate: boiler.maintenanceRate || 0,
    // eslint-disable-next-line
    id: boiler._id,
  });

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
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
          <input type="text" id="description" name="description" value={state.description} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="boilerType">Boiler type</label>
          <input type="text" id="boilerType" name="boilerType" value={state.boilerType} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="hourMaintenanceCost">Hour Maintenance Cost</label>
          <input type="number" id="hourMaintenanceCost" name="hourMaintenanceCost" value={state.hourMaintenanceCost} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="hourEventualCost">Hour Eventual Cost</label>
          <input type="number" id="hourEventualCost" name="hourEventualCost" value={state.hourEventualCost} onChange={onChangeInput} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="maintenanceRate">Maintenance Rate</label>
          <input type="number" id="maintenanceRate" name="maintenanceRate" value={state.maintenanceRate} onChange={onChangeInput} />
        </div>
        <div className={styles.buttonContainer}>
          <Button btnLabel="Cancel" onClick={onClose} />
          <Button btnLabel="Submit" primary onClick={() => submit()} />
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
