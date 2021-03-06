import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import ConfirmationMessage from '../sharedComponents/ConfirmationMessage';
import Modal from '../sharedComponents/Modal';
import BoilersForm from './BoilersForm';

import styles from './boilers.module.css';
import {
  getBoilers as getBoilersAction,
  deleteBoiler as deleteBoilerAction,
  addBoiler as addBoilerAction,
  updateBoiler as updateBoilerAction,
} from '../../redux/actions/boilersAction';

const boilersComponent = ({
  boilers,
  getBoilers,
  deleteBoiler,
  addBoiler,
  updateBoiler,
}) => {
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

  const removeBoiler = (id) => {
    deleteBoiler(id);
    onCloseModal();
  };

  useEffect(() => {
    getBoilers();
  }, []);

  return (
    <>
      <div className={styles.boilersContainer}>
        {boilers.loading ? <span>LOADING BOILERS DATA...</span>
          : (
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
                {boilers.list.map((boiler) => (
                  <tr key={boiler._id}>
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
                            id: boiler._id,
                            title: 'Delete Boiler',
                          },
                        })}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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
            && (
            <BoilersForm
              onSubmit={(boiler) => {
                addBoiler(boiler);
                onCloseModal();
              }}
              onClose={onCloseModal}
            />
            )}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => removeBoiler(modal.meta.id)} onClose={onCloseModal} entity="Boiler" />}
          {modal.type === 'UPDATE'
            && (
              <BoilersForm
                onSubmit={(boiler, id) => {
                  updateBoiler(boiler, id);
                  onCloseModal();
                }}
                onClose={onCloseModal}
                boiler={modal.meta.boiler}
              />
            )}
        </Modal>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getBoilers: getBoilersAction,
    deleteBoiler: deleteBoilerAction,
    addBoiler: addBoilerAction,
    updateBoiler: updateBoilerAction,
  }, dispatch)
);

const mapStateToProps = (state) => ({
  boilers: state.boilers,
});

export default connect(mapStateToProps, mapDispatchToProps)(boilersComponent);
