import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import Button from '../../sharedComponents/Button';
import styles from './boilersForm.module.css';

const BoilersForm = ({
  onSubmit,
  onClose,
  boiler,
}) => {
  const [state, setState] = useState({
    description: boiler.description || '',
    boilerType: boiler.boilerType || '5fcc1d06998cd913c71c7e01',
    hourMaintenanceCost: boiler.hourMaintenanceCost || 0,
    hourEventualCost: boiler.hourEventualCost || 0,
    maintenanceRate: boiler.maintenanceRate || 0,
    id: boiler._id,
  });

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const ReactSelectAdapter = (boilerTypesOptions) => (
    <Select {...boilerTypesOptions} />
  );

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
      <Form
        onSubmit={submit}
        initialValues={{
          description: state.description,
          boilerType: state.boilerType,
          hourMaintenanceCost: state.hourMaintenanceCost,
          hourEventualCost: state.hourEventualCost,
          maintenanceRate: state.maintenanceRate,
        }}
        render={({ handleSubmit }) => (
          <form className={styles.boilersFormContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="description">Description:</label>
              <Field name="description" component="input" type="text" placeholder="Description" value={state.description} onChange={onChangeInput} />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="boilerType">Boiler Type:</label>
              <Field name="boilerType" component={ReactSelectAdapter} type="text" placeholder="Boiler Types Description" value={state.boilerType} onChange={onChangeInput} />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="hourMaintenanceCost">Hour Maintenance Cost:</label>
              <Field name="hourMaintenanceCost" component="input" type="number" placeholder="Hour Maintenance Cost" value={state.hourMaintenanceCost} onChange={onChangeInput} />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="hourEventualCost">Hour Eventual Cost:</label>
              <Field name="hourEventualCost" component="input" type="number" placeholder="Hour Eventual Cost" value={state.hourEventualCost} onChange={onChangeInput} />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="maintenanceRate">Maintenance Rate:</label>
              <Field name="maintenanceRate" component="input" type="number" placeholder="Maintenance Rate" value={state.maintenanceRate} onChange={onChangeInput} />
            </div>
            <div className={styles.buttonContainer}>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button btnLabel="Submit" primary onClick={() => submit()} />
            </div>
          </form>
        )}
      />
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
