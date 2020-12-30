import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './BoilerTypesApp.module.css';
import BoilerType from './BoilerTypes';
import BoilerTypesForm from './BoilerTypesForm';
import { showBoilerTypes } from '../../redux/actions/boilerTypes.action';

const BoilerTypesApp = () => {
  const dispatch = useDispatch();
  const fetchBoilerTypes = useCallback(() => dispatch(showBoilerTypes()), [dispatch]);
  const boilerTypeList = useSelector((state) => state.boilerTypes.boilerTypes);

  useEffect(() => {
    fetchBoilerTypes();
  }, []);

  const handleAddBoilerTypes = (newBoilerType) => null;

  if (!boilerTypeList) return null;

  const renderBoilerTypes = boilerTypeList.map((boilerType) => {
    // eslint-disable-next-line no-underscore-dangle
    const key = boilerType._id;
    return (
      <BoilerType
        key={key}
        boilerType={boilerType}
        boilerTypes={boilerTypeList}
      />
    );
  });

  // RETURN THE COMPONENT
  return (
    <div className="App">
      <div className={styles.AppHeader}>
        Boilers Types -
        <span className="number-of-boilerTypes">
          {boilerTypeList.length}
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
