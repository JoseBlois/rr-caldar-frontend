import React, { useState } from 'react';
import propTypes from 'prop-types';
import styles from './BoilerTypesForm.module.css';

const BoilerTypesForm = (props) => {
  const [boilerType, setBoilerType] = useState({
    id: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddBoilerTypes(boilerType);
    setBoilerType({
      id: '',
      description: '',
    });
  };

  const generateRandomNumber = () => Math.floor(Math.random() * 100000000000) + 1;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setBoilerType({ ...boilerType, [name]: value, id: generateRandomNumber() });
  };

  return (
    <div className="new-element">
      <form onSubmit={handleSubmit} className={styles.inputWraper}>
        <div className="input-description">
          <input
            type="text"
            name="description"
            className="form-control"
            value={boilerType.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </div>
        <button type="submit" className="btn-submit">
          Save
        </button>
      </form>
    </div>
  );
};

BoilerTypesForm.propTypes = {
  onAddBoilerTypes: propTypes.func.isRequired,
};

export default BoilerTypesForm;
