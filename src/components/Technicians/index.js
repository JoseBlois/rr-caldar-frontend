import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import TechniciansForm from './TechniciansForm';
import ConfirmationMessage from '../sharedComponents/ConfirmationMessage';
import Modal from '../sharedComponents/Modal';
import styles from './Technician.module.css';

const Technicians = () => {
  const [technicians, setTechnicians] = useState([]);
  const [modal, setModal] = useState({
    show: false,
    type: '',
    meta: {},
  });

  const onCloseModal = () => {
    setModal({
      show: false,
      type: '',
      meta: {},
    });
  };

  const addTechnician = (technician) => {
    setTechnicians([...technicians, {
      ...technician,
      id: technicians.length + 1,
    }]);
    onCloseModal();
  };

  const removeTechnician = (id) => {
    setTechnicians(technicians.filter((technician) => technician.id !== id));
    onCloseModal();
  };

  const updateTechnician = (updatedTechnician) => {
    const index = technicians.findIndex((technician) => technician.id === updatedTechnician.id);
    const newTechnicians = [...technicians];
    newTechnicians[index] = updatedTechnician;
    setTechnicians(newTechnicians);
    onCloseModal();
  };

  return (
    <>
      <div className={styles.techniciansContainer}>
        <table className={styles.techniciansTable}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Boiler Type</th>
              <th className={styles.actionsRow}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {technicians.map((technician) => (
              <tr key={technician.id}>
                <td>
                  {technician.firstName}
                </td>
                <td>
                  {technician.lastName}
                </td>
                <td>
                  {technician.address}
                </td>
                <td>
                  {technician.phone}
                </td>
                <td>
                  {technician.email}
                </td>
                <td>
                  {technician.boilerType}
                </td>
                <td>
                  <FontAwesomeIcon
                    style={{ marginRight: '10px' }}
                    icon={faPen}
                    size="lg"
                    onClick={() => setModal({
                      show: true,
                      type: 'UPDATE',
                      meta: {
                        technician,
                        title: 'Update Technician',
                      },
                    })}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    size="lg"
                    onClick={() => setModal({
                      show: true,
                      type: 'DELETE',
                      meta: {
                        id: technician.id,
                        title: 'Delete Technician',
                      },
                    })}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.addButtonContainer}>
        <button
          type="button"
          className={styles.addButton}
          onClick={() => setModal({
            show: true,
            type: 'ADD',
            meta: {
              title: 'Add new Technician',
            },
          })}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {modal.show && (
        <Modal title={modal.meta.title} onClose={onCloseModal}>
          {modal.type === 'ADD'
            && <TechniciansForm onSubmit={addTechnician} onClose={onCloseModal} />}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => removeTechnician(modal.meta.id)} onClose={onCloseModal} entity="Technician" />}
          {modal.type === 'UPDATE'
          && (
            <TechniciansForm
              onSubmit={updateTechnician}
              onClose={onCloseModal}
              technician={modal.meta.technician}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default Technicians;
