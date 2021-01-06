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

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const btSubmit = (value) => {
    console.log(value);
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
              <Field
                name="description"
                component="input"
                type="text"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button type="submit" btnLabel="Submit" primary />
            </div>
          </form>
        )}
      />
    </div>
    // <div>
    //   <form className={styles.boilerTypesFormContainer}>
    //     <div className={styles.inputContainer}>
    //       <label htmlFor="description">Description</label>
    //       <input type="text" id="description" name="description"
    // value={state.description} onChange={onChangeInput} />
    //     </div>
    //     <div className={styles.buttonContainer}>
    //       <Button btnLabel="Cancel" onClick={onClose} />
    //       <Button btnLabel="Submit" primary onClick={() => submit()} />
    //     </div>
    //   </form>
    // </div>
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
