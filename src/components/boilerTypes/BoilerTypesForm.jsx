import React, { useState } from 'react';
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

  const submit = () => {
    const boilerTypeToSub = {
      description: state.description,
    };
    onSubmit(boilerTypeToSub, state.id);
  };

  return (
    <div>
      <form className={styles.boilerTypesFormContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" value={state.description} onChange={onChangeInput} />
        </div>
        <div className={styles.buttonContainer}>
          <Button btnLabel="Cancel" onClick={onClose} />
          <Button btnLabel="Submit" primary onClick={() => submit()} />
        </div>
      </form>
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
