/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import Button from '../sharedComponents/Button';
import styles from './BoilerTypesForm.module.css';

const BoilerTypesForm = ({
  onSubmit,
  onClose,
  boilerType,
}) => {
  const [state, setState] = useState({
    description: boilerType.description || '',
    id: boilerType._id,
  });

  const required = (value) => (value.description ? undefined : 'Required');

  const btSubmit = (value) => {
    const boilerTypeToSub = {
      description: value.description,
    };
    onSubmit(boilerTypeToSub, state.id);
  };

  return (
    <div>
      <Form
        onSubmit={btSubmit}
        initialValues={{ description: '' }}
        render={({
          handleSubmit,
          form,
        }) => (
          <form onSubmit={handleSubmit} className={styles.boilerTypesFormContainer}>
            <div>
              <label htmlFor="description">Description</label>
              <Field name="description" type="text" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <span className={styles.msg}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.buttonContainer}>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button type="submit" btnLabel="Submit" primary />
            </div>
          </form>
        )}
      />
    </div>
  );
};

BoilerTypesForm.defaultProps = {
  boilerType: {},
};

BoilerTypesForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  boilerType: PropTypes.object,
};

export default BoilerTypesForm;
