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
      <tr className={styles.table}>
        <td>{boiler.id}</td>
        <td>{boiler.description}</td>
        <td>{boiler.boilerType}</td>
        <td>{boiler.hourMaintenanceCost}</td>
        <td>{boiler.hourEventualCost}</td>
        <td>{boiler.maintenanceRate}</td>
        <td>
          <button type="button" className={styles.updateBtn} onClick={toggleUpdateModal}>Update</button>
        </td>
        <td>
          <button type="button" className={styles.deleteBtn} onClick={toggleDeleteModal}>Delete</button>
        </td>
      </tr>
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
              boilerId={boiler.id}
              toggleUpdateModal={toggleUpdateModal}
            />
          </Modal>
        )}
      </div>
    </>
  );
}
