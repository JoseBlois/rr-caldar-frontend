import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../sharedComponents/Modal';
import ConfirmationMessage from '../../sharedComponents/ConfirmationMessage';
import BuildingsForm from '../BuildingsForm';

import styles from './Buildings.module.css';
import { getBuildings, deleteBuilding } from '../../../redux/actions/buildingActions';

const index = ({
  buildingsR, buildings, deleteBuildingR, updateBuilding, searchBuilding, getBuildingsR,
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
    deleteBuildingR(id);
    onCloseModal();
  };

  useEffect(() => {
    getBuildingsR();
    console.log(buildingsR);
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Boilers</th>
              <th>Company</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buildingsR.list.map((building) => (
              <tr>
                <td>{building.name}</td>
                <td>{building.address}</td>
                <td>
                  [
                  {building.boilers.join('-')}
                  ]
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
        {buildingsR.loading ? <span>LOADING</span> : null}
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
            && <BuildingsForm onSubmit={(b) => console.log(b)} onClose={onCloseModal} />}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => deleteWithMoldal(modal.meta.id)} onClose={onCloseModal} entity=" Building" />}
          {modal.type === 'UPDATE'
            && (
              <BuildingsForm
                onSubmit={() => console.log(modal.meta.building)}
                onClose={onCloseModal}
                building={modal.meta.building}
              />
            )}
        </Modal>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getBuildingsR: () => dispatch(getBuildings()),
  deleteBuildingR: (id) => dispatch(deleteBuilding(id)),
});

const mapStateToProps = (state) => ({
  buildingsR: state.buildings,
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
