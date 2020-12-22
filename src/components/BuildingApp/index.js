import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import buildingsData from '../../mocks/buildings.json';
import Header from './Header';
import Buildings from './Buildings';
import AddBuilding from './AddBuilding';
import UpdateBuilding from './UpdateBuilding';
import styles from './BuildingApp.module.css';

export default function BuildingAppF() {
  const [buildings, setBuildings] = useState(buildingsData);
  const [max, setMax] = useState(buildings.length);

  const deleteBuilding = (id) => {
    setBuildings([...buildings.filter((building) => building.id !== id)]);
  };

  const addBuilding = (newBuilding) => {
    const building = newBuilding;
    building.id = buildings[buildings.length - 1].id + 1;
    setBuildings([...buildings, building]);
    setMax(max + 1);
  };

  const updateBuilding = (updatedBuilding) => {
    setBuildings(buildings.map((building) => {
      if (building.id === updatedBuilding.id) {
        return updatedBuilding;
      }
      return building;
    }));
  };

  const searchBuilding = (id) => buildings
    .find((building) => building.id === id);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Route path="/buildings/add">
          <AddBuilding addBuilding={addBuilding} />
        </Route>
        <Route path="/buildings/update">
          <UpdateBuilding
            searchBuilding={searchBuilding}
            updateBuilding={updateBuilding}
            max={max}
          />
        </Route>
        <Route exact path="/buildings/">
          <Buildings
            deleteBuilding={deleteBuilding}
            buildings={buildings}
          />
        </Route>
      </div>
    </>
  );
}
