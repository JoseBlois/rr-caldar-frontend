import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './BoilerTypesForm.module.css';
import { createBoilerTypes } from '../../redux/actions/boilerTypes.action';

const BoilerTypesForm = () => {
  const [boilerType, setBoilerType] = useState({
    id: '',
    description: '',
  });

  const dispatch = useDispatch();
  const addBoilerTypes = useCallback((bt) => dispatch(createBoilerTypes(bt)), [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoilerTypes(boilerType);
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

export default BoilerTypesForm;
