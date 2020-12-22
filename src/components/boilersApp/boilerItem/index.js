import React, { useState } from 'react';
import Modal from '../modal';
import UpdateBoiler from '../updateBoiler';
import styles from './BoilerItem.module.css';

export default function index({
  boiler, deleteBoiler, updateBoiler, searchBoiler,
}) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);
  const toggleUpdateModal = () => setUpdateModalOpen(!updateModalOpen);

  return (
    <>
      <div className={styles.row}>
        <div>{boiler.description}</div>
        <div>{boiler.boilerType}</div>
        <div>{boiler.hourMaintenanceCost}</div>
        <div>{boiler.hourEventualCost}</div>
        <div>{boiler.maintenanceRate}</div>
        <button type="button" className={styles.editBtn} onClick={toggleUpdateModal}>Update</button>
        <button type="button" className={styles.deleteBtn} onClick={toggleDeleteModal}>Delete</button>
      </div>
      <div>
        {deleteModalOpen && (
          <Modal title="Delete Boiler" submitLabel="Confirm" onClose={toggleDeleteModal} onSubmit={deleteBoiler} boilerId={boiler.id}>
            <h2>Are you sure that you want to delete this boiler?</h2>
          </Modal>
        )}
      </div>
      <div>
        {updateModalOpen && (
          <Modal title="Update Boiler" submitLabel="Confirm" onClose={toggleUpdateModal} onSubmit={updateBoiler} boilerId={boiler.id}>
            <h2>Boiler Update form</h2>
            <UpdateBoiler
              updateBoiler={updateBoiler}
              searchBoiler={searchBoiler}
              buildingId={boiler.id}
              toggleUpdateModal={toggleUpdateModal}
            />
          </Modal>
        )}
      </div>
    </>
  );
}
