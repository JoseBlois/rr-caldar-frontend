import React from 'react';
import './BuildingItem.css';

export default function index({ building, deleteBuilding }) {
  return (
    <div className="row">
      <div>{building.name}</div>
      <div>{building.address}</div>
      <div>
        [
        {building.boilers.join('-')}
        ]
      </div>
      <div>{building.company}</div>
      <div>{building.id}</div>
      <button
        type="button"
        className="delete-btn"
        onClick={deleteBuilding.bind(this, building.id)}
      >
        X
      </button>
    </div>
  );
}
