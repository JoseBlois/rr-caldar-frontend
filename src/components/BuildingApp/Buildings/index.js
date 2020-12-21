import React from 'react';
import BuildingItem from '../BuildingItem';
import './Buildings.css';

export default function index({
  buildings, deleteBuilding, updateBuilding, searchBuilding,
}) {
  return (
    <div>
      <div className="headers-container">
        <div className="header">NAME</div>
        <div className="header">ADDRESS</div>
        <div className="header">BOILERS</div>
        <div className="header">COMPANY</div>
        <div className="header">ID</div>
        <div>DELETE</div>
      </div>
      {buildings.map((building) =>
        // eslint-disable-next-line
        <BuildingItem
          deleteBuilding={deleteBuilding}
          key={building.id}
          building={building}
          updateBuilding={updateBuilding}
          searchBuilding={searchBuilding}
        />)}
    </div>
  );
}
