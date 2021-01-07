import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import Button from '../../sharedComponents/Button';
import styles from './BuildingsForm.module.css';

const BuildingsForm = ({
  onSubmit,
  onClose,
  building,
}) => {
  const [boilerOptions, setBoilersOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pickedBoilers, setPickedBoilers] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://caldar-application.herokuapp.com/boilers');
    const json = await response.json();
    setBoilersOptions(json.map((boiler) => ({
      label: boiler.description,
      value: boiler._id,
    })));
    const boilerForDefaults = json.map((boiler) => ({
      label: boiler.description,
      value: boiler._id,
    }));
    const defValues = [];
    if (building) {
      for (let i = 0; i < building.boilers.length; i += 1) {
        boilerForDefaults.map((boiler) => {
          if (boiler.value === building.boilers[i]) {
            defValues.push(boiler);
          }
          return false;
        });
      }
    }
    if (defValues.length === 0) {
      const initialBoilers = null;
      setPickedBoilers(initialBoilers);
    } else {
      setPickedBoilers(defValues);
    }
    setLoading(false);
  }, []);

  const submit = (values) => {
    onSubmit({
      ...values,
      boilers: values.boilers.map((boiler) => boiler.value),
    }, building._id);
  };

  const required = (value) => (value ? undefined : 'Required');

  const requiredSelect = (value) => ((value === null) ? 'Required' : undefined);

  return (
    <div>
      <Form
        onSubmit={submit}
        initialValues={{
          name: building.name || '',
          address: building.address || '',
          company: building.company || '',
          phone: building.phone || '',
          boilers: pickedBoilers,
        }}
        render={({ handleSubmit }) => (
          <form className={styles.buildingFormContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="name">
                Building Name
                <Field name="name" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="Building name" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="address">
                Building Address
                <Field name="address" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="Building address" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="company">
                Building Company
                <Field name="company" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="Building company" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="phone">
                Building Phone
                <Field name="phone" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="Building phone" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            {loading ? <div>loading</div>
              : (
                <div className={styles.inputContainer}>
                  <label htmlFor="boilers">
                    Boilers:
                    <Field name="boilers" validate={requiredSelect}>
                      {({ input, meta }) => (
                        <div>
                          <Select {...input} options={boilerOptions} isMulti required />
                          {(meta.error && meta.touched && <p>{meta.error}</p>)}
                        </div>
                      )}
                    </Field>
                  </label>
                </div>
              )}
            <div className={styles.buttonContainer}>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button type="submit" btnLabel="Submit" primary onClick={handleSubmit} />
            </div>
          </form>
        )}
      />
    </div>
  );
};

BuildingsForm.defaultProps = {
  building: {
    boilers: ['', '', ''],
  },
};

BuildingsForm.propTypes = {
  building: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default BuildingsForm;
