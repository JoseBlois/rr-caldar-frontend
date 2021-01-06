import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import ConfirmationMessage from '../sharedComponents/ConfirmationMessage';
import Modal from '../sharedComponents/Modal';
import BoilerTypesForm from './BoilerTypesForm';

import styles from './BoilerTypesApp.module.css';
import {
  getBoilerTypes as getBoilerTypesAction,
  deleteBoilerType as deleteBoilerTypeAction,
  addBoilerType as addBoilerTypeAction,
  updateBoilerType as updateBoilerTypeAction,
} from '../../redux/actions/boilerTypesAction';

const boilerTypesComponent = ({
  boilerTypes,
  getBoilerTypes,
  deleteBoilerType,
  addBoilerType,
  updateBoilerType,
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

  const removeBoilerType = (id) => {
    deleteBoilerType(id);
    onCloseModal();
  };

  useEffect(() => {
    getBoilerTypes();
  }, []);

  return (
    <>
      <div className={styles.boilerTypesContainer}>
        {boilerTypes.loading ? <span>LOADING BOILERTYPES DATA...</span>
          : (
            <table className={styles.boilerTypesTable}>
              <thead>
                <tr>
                  <th>Description</th>
                  <th className={styles.actionsRow}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {boilerTypes.list.map((boilerType) => (
                  <tr key={boilerType._id}>
                    <td>{boilerType.description}</td>
                    <td>
                      <FontAwesomeIcon
                        style={{ marginRight: '10px' }}
                        icon={faPen}
                        size="lg"
                        onClick={() => setModal({
                          show: true,
                          type: 'UPDATE',
                          meta: {
                            boilerType,
                            title: 'Update BoilerType',
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
                            id: boilerType._id,
                            title: 'Delete BoilerType',
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
              title: 'Add new BoilerType',
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
            <BoilerTypesForm
              onSubmit={(boilerType) => {
                addBoilerType(boilerType);
                onCloseModal();
              }}
              onClose={onCloseModal}
            />
            )}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => removeBoilerType(modal.meta.id)} onClose={onCloseModal} entity="BoilerType" />}
          {modal.type === 'UPDATE'
            && (
              <BoilerTypesForm
                onSubmit={(boilerType, id) => {
                  updateBoilerType(boilerType, id);
                  onCloseModal();
                }}
                onClose={onCloseModal}
                boilerType={modal.meta.boilerType}
              />
            )}
        </Modal>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getBoilerTypes: getBoilerTypesAction,
    deleteBoilerType: deleteBoilerTypeAction,
    addBoilerType: addBoilerTypeAction,
    updateBoilerType: updateBoilerTypeAction,
  }, dispatch)
);

const mapStateToProps = (state) => ({
  boilerTypes: state.boilerTypes,
});

export default connect(mapStateToProps, mapDispatchToProps)(boilerTypesComponent);
