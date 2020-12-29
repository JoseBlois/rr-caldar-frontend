import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './BoilerTypesApp.module.css';
import BoilerType from './BoilerTypes';
import BoilerTypesForm from './BoilerTypesForm';
import { showBoilerTypes } from '../../redux/actions/boilerTypes.action';

const BoilerTypesApp = () => {
  const [boilerTypes, setBoilerTypes] = useState([]);
  const dispatch = useDispatch();
  const fetchBoilerTypes = useCallback(() => dispatch(showBoilerTypes()), [dispatch]);
  const boilerTypeList = useSelector((state) => state.boilerTypes.boilerTypes);

  useEffect(() => {
    fetchBoilerTypes();
    setBoilerTypes(boilerTypeList);
  }, []);

  const handleAddBoilerTypes = (newBoilerType) => setBoilerTypes([...boilerTypes, newBoilerType]);

  if (!boilerTypes) return null;

  const renderBoilerTypes = boilerTypes.map((boilerType) => (
    <BoilerType
      key={boilerType.id}
      boilerType={boilerType}
      boilerTypes={boilerTypes}
      changeBoilerTypes={setBoilerTypes}
    />
  ));

  // RETURN THE COMPONENT
  return (
    <div className="App">
      <div className={styles.AppHeader}>
        Boilers Types -
        <span className="number-of-boilerTypes">
          {boilerTypes.length}
        </span>
      </div>
      <div className="new-boiler-type">
        <BoilerTypesForm onAddBoilerTypes={handleAddBoilerTypes} />
      </div>
      <div className="container">
        <div className="row">
          {renderBoilerTypes}
        </div>
      </div>
    </div>
  );
};

export default BoilerTypesApp;
