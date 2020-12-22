import React, { useState } from 'react';
import Modal from '../Modal';
import styles from './BuildingItem.module.css';

export default function index({
  building, deleteBuilding,
}) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [buildingToUpdate, setBuildingToUpdate] = useState(null);

  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);

  return (
    <>
      <div className={styles.row}>
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
          className={styles.deleteBtn}
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
    </>
  );
}
