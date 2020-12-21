import React, { useEffect, useState } from 'react';
import './BoilerTypesApp.css';
import { boilerTypes as jsonBoilerTypes } from '../../boilerTypes.json';
import BoilerType from './BoilerTypes';
import BoilerTypesForm from './BoilerTypesForm';

const BoilerTypesApp = () => {
  const [boilerTypes, setBoilerTypes] = useState([]);

  useEffect(() => {
    setBoilerTypes(jsonBoilerTypes);
  }, []);

  const handleAddBoilerTypes = newBoilerType => setBoilerTypes([...boilerTypes, newBoilerType]);

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
      <div className="App-Header">
          Boilers Types - 
          <span className="number-of-boilerTypes">
            {boilerTypes.length}
          </span>
      </div>
      <div className="new-boiler-type">
        { <BoilerTypesForm onAddBoilerTypes={handleAddBoilerTypes}></BoilerTypesForm> }
      </div>
      <div className="container">
        <div className="row">
          {renderBoilerTypes}
        </div>
      </div>
    </div>
  );
}

export default BoilerTypesApp; 