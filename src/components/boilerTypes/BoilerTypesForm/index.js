import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import Button from '../../sharedComponents/Button';
import TextInput from '../../sharedComponents/TextInput';
import { required } from '../../../utils/validations';
import styles from './boilerTypesForm.module.css';

const BoilerTypesForm = ({
  onSubmit,
  onClose,
  boilerType,
}) => {
  const btSubmit = (value) => {
    const boilerTypeToSub = {
      description: value.description,
    };
    onSubmit(boilerTypeToSub, boilerType._id);
  };

  return (
    <div>
      <Form
        onSubmit={btSubmit}
        initialValues={{ description: boilerType.description || '' }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.boilerTypesFormContainer}>
            <div className={styles.inputContainer}>
              <Field
                name="description"
                type="text"
                validate={required}
                component={TextInput}
                placeholder="Description"
                label="Description"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button type="submit" btnLabel="Submit" onClick={handleSubmit} primary />
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
