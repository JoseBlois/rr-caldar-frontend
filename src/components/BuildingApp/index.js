import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import buildingsData from '../../mocks/buildings.json';
import Header from './Header';
import Buildings from './Buildings';
import AddBuilding from './AddBuilding';
import EditBuilding from './UpdateBuilding';
import './BuildingApp.css';

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
    const updatedBuildings = buildings;
    const index = updatedBuildings
      .findIndex((oldBuilding) => oldBuilding.id === updatedBuilding.id);
    updatedBuildings[index] = updatedBuilding;
    setBuildings(updatedBuildings);
  };

  const searchBuilding = (id) => buildings
    .find((building) => building.id === id);

  return (
    <>
      <Header />
      <div className="container">
        <Route path="/buildings/add">
          <AddBuilding addBuilding={addBuilding} />
        </Route>
        <Route path="/buildings/update">
          <EditBuilding max={max} searchBuilding={searchBuilding} updateBuilding={updateBuilding} />
        </Route>
        <Route exact path="/buildings/">
          <Buildings deleteBuilding={deleteBuilding} buildings={buildings} />
        </Route>
      </div>
    </>
  );
}
