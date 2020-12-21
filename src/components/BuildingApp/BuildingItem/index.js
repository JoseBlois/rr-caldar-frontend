import React, { useState } from 'react';
import Modal from '../Modal';
import UpdateBuilding from '../UpdateBuilding';
import './BuildingItem.css';

export default function index({
  building, deleteBuilding, searchBuilding, updateBuilding,
}) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // const [buildingToUpdate, setBuildingToUpdate] = useState(null);

  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);
  const toggleUpdateModal = () => setUpdateModalOpen(!updateModalOpen);

  return (
    <>
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
          onClick={toggleUpdateModal}
        >
          Edit
        </button>

        <button
          type="button"
          className="delete-btn"
          onClick={toggleDeleteModal}
        >
          X
        </button>
      </div>
      <div>
        {deleteModalOpen && (
          <Modal
            title="Delete Building"
            submitLabel="Confirm"
            onClose={toggleDeleteModal}
            onSubmit={deleteBuilding}
            buildingId={building.id}
          >
            <h2>Are you sure that you want to delete it?</h2>
          </Modal>
        )}
      </div>
      <div>
        {updateModalOpen && (
          <Modal
            title="Update Building"
            submitLabel="Confirm"
            onClose={toggleUpdateModal}
            onSubmit={updateBuilding}
            buildingId={building.id}
          >
            <h2>Building Update Panel</h2>
            <UpdateBuilding
              updateBuilding={updateBuilding}
              searchBuilding={searchBuilding}
              buildingId={building.id}
              toggleUpdateModal={toggleUpdateModal}
            />
          </Modal>
        )}
      </div>
    </>
  );
}
