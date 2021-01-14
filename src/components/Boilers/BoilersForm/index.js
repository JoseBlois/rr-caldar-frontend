import React, { useState, useEffect } from 'react';
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
  const [boilerTypeOptions, setBoilerTypeOptions] = useState([]);
  const [pickedBoilerType, setPickedBoilerType] = useState(null);

  useEffect(async () => {
    const boilerTypesResponse = await fetch('https://caldar-application.herokuapp.com/boilerTypes');
    const boilerTypesData = await boilerTypesResponse.json();
    const allBoilerTypes = boilerTypesData.map((boilerType) => ({
      label: boilerType.description,
      value: boilerType._id,
    }));
    setBoilerTypeOptions(allBoilerTypes);
    if (boiler) {
      allBoilerTypes.map((boilerType) => {
        if (boilerType.value === boiler.boilerType) {
          setPickedBoilerType(boilerType);
        }
        return false;
      });
    }
  }, []);

  const submit = (values) => {
    const boilerToSub = {
      description: values.description,
      boilerType: values.boilerType.value,
      hourMaintenanceCost: values.hourMaintenanceCost,
      hourEventualCost: values.hourEventualCost,
      maintenanceRate: values.maintenanceRate,
    };
    onSubmit(boilerToSub, boiler._id);
  };

  const required = (value) => (value ? undefined : 'Required');

  return (
    <div>
      <Form
        onSubmit={submit}
        initialValues={{
          description: boiler.description || 'Boiler',
          boilerType: pickedBoilerType,
          hourMaintenanceCost: boiler.hourMaintenanceCost || 0,
          hourEventualCost: boiler.hourEventualCost || 0,
          maintenanceRate: boiler.maintenanceRate || 0,
        }}
        render={({ handleSubmit }) => (
          <form className={styles.boilersFormContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="description">Description:</label>
              <Field name="description" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} type="text" placeholder="Boiler ..." />
                    {meta.error && meta.touched && <div>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="boilerType">Boiler Type:</label>
              <Field name="boilerType" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <Select {...input} options={boilerTypeOptions} />
                    {meta.error && meta.touched && <div>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="hourMaintenanceCost">Hour Maintenance Cost:</label>
              <Field name="hourMaintenanceCost" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} type="number" placeholder="0" />
                    {meta.error && meta.touched && <div>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="hourEventualCost">Hour Eventual Cost:</label>
              <Field name="hourEventualCost" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} type="number" placeholder="0" />
                    {meta.error && meta.touched && <div>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="maintenanceRate">Maintenance Rate:</label>
              <Field name="maintenanceRate" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} type="number" placeholder="0" />
                    {meta.error && meta.touched && <div>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.buttonContainer}>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button btnLabel="Submit" primary onClick={handleSubmit} />
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
