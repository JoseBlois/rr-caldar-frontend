import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../sharedComponents/Modal';
import ConfirmationMessage from '../../sharedComponents/ConfirmationMessage';
import BuildingsForm from '../BuildingsForm';

import styles from './Buildings.module.css';
import {
  getBuildings as getBuildingsR,
  deleteBuilding as deleteBuildingR,
  addBuilding as addBuildingR,
  updateBuilding as updateBuildingR,
} from '../../../redux/actions/buildingActions';

const index = ({
  buildings, deleteBuilding, updateBuilding, getBuildings,
  addBuilding,
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

  const deleteWithMoldal = (id) => {
    deleteBuilding(id);
    onCloseModal();
  };

  useEffect(() => {
    getBuildings();
  }, []);

  return (
    <>
      <div className={styles.buildingContainer}>
        <table className={styles.buildingTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Boilers</th>
              <th>Company</th>
              <th>Phone</th>
              <th className={styles.actionsRow}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buildings.list.map((building) => (
              // eslint-disable-next-line
              <tr key={building._id}>
                <td>{building.name}</td>
                <td>{building.address}</td>
                <td>
                  {
                  building.boilers.map((boiler) => <div>{boiler}</div>)
                  }
                </td>
                <td>{building.company}</td>
                <td>{building.phone}</td>
                <td>
                  <FontAwesomeIcon
                    style={{ marginRight: '10px' }}
                    icon={faPen}
                    size="lg"
                    onClick={() => setModal({
                      show: true,
                      type: 'UPDATE',
                      meta: {
                        building,
                        title: 'Update Building',
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
                        // eslint-disable-next-line
                        id: building._id,
                        title: 'Delete Building',
                      },
                    })}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {buildings.loading ? <span>LOADING</span> : null}
      </div>
      <div className={styles.addButtonContainer}>
        <button
          type="button"
          className={styles.addButton}
          onClick={() => setModal({
            show: true,
            type: 'ADD',
            meta: {
              title: 'Add new Building',
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
            <BuildingsForm
              onSubmit={(building) => {
                addBuilding(building);
                onCloseModal();
              }}
              onClose={onCloseModal}
            />
            )}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => deleteWithMoldal(modal.meta.id)} onClose={onCloseModal} entity=" Building" />}
          {modal.type === 'UPDATE'
            && (
              <BuildingsForm
                onSubmit={(building, id) => {
                  updateBuilding(building, id);
                  onCloseModal();
                }}
                onClose={onCloseModal}
                building={modal.meta.building}
              />
            )}
        </Modal>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getBuildings: getBuildingsR,
    deleteBuilding: deleteBuildingR,
    addBuilding: addBuildingR,
    updateBuilding: updateBuildingR,
  }, dispatch)
);

const mapStateToProps = (state) => ({
  buildings: state.buildings,
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
