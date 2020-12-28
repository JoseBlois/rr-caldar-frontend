import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import BoilersForm from './BoilersForm';
import ConfirmationMessage from '../sharedComponents/ConfirmationMessage';
import Modal from '../sharedComponents/Modal';
import styles from './boilers.module.css';
import boilersData from '../../mocks/boilers.json';

const Boilers = () => {
  const [boilers, setBoilers] = useState(boilersData);
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

  const addBoiler = (boiler) => {
    setBoilers([...boilers, {
      ...boiler,
      id: boilers.length + 1,
    }]);
    onCloseModal();
  };

  const removeBoiler = (id) => {
    setBoilers(boilers.filter((boiler) => boiler.id !== id));
    onCloseModal();
  };

  const updateBoiler = (updatedBoiler) => {
    const index = boilers.findIndex((boiler) => boiler.id === updatedBoiler.id);
    const newBoilers = [...boilers];
    newBoilers[index] = updatedBoiler;
    setBoilers(newBoilers);
    onCloseModal();
  };

  return (
    <>
      <div className={styles.boilersContainer}>
        <table className={styles.boilersTable}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Boiler Type</th>
              <th>Hour Maintenance Cost</th>
              <th>Hour Eventual Cost</th>
              <th>Maintenance Rate</th>
              <th className={styles.actionsRow}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {boilers.map((boiler) => (
              <tr key={boiler.id}>
                <td>{boiler.description}</td>
                <td>{boiler.boilerType}</td>
                <td>{boiler.hourMaintenanceCost}</td>
                <td>{boiler.hourEventualCost}</td>
                <td>{boiler.maintenanceRate}</td>
                <td>
                  <FontAwesomeIcon
                    style={{ marginRight: '10px' }}
                    icon={faPen}
                    size="lg"
                    onClick={() => setModal({
                      show: true,
                      type: 'UPDATE',
                      meta: {
                        boiler,
                        title: 'Update Boiler',
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
                        id: boiler.id,
                        title: 'Delete Boiler',
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
              title: 'Add new Boiler',
            },
          })}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {modal.show && (
        <Modal title={modal.meta.title} onClose={onCloseModal}>
          {modal.type === 'ADD'
            && <BoilersForm onSubmit={addBoiler} onClose={onCloseModal} />}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => removeBoiler(modal.meta.id)} onClose={onCloseModal} entity="Boiler" />}
          {modal.type === 'UPDATE'
            && (
              <BoilersForm
                onSubmit={updateBoiler}
                onClose={onCloseModal}
                boiler={modal.meta.boiler}
              />
            )}
        </Modal>
      )}
    </>
  );
};

export default Boilers;
