import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmationMessage from '../sharedComponents/ConfirmationMessage';
import Modal from '../sharedComponents/Modal';
import TechniciansForm from './TechniciansForm';
import styles from './Technician.module.css';
import {
  getTechnicians as getTechniciansAction,
  addTechnician as addTechniciansAction,
  updateTechnician as updateTechnicianaction,
  deleteTechnician as deleteTechnicianAction,
} from '../../redux/actions/techniciansAction';

const technicianComponent = ({
  technicians,
  getTechnicians,
  addTechnician,
  updateTechnician,
  deleteTechnician,
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

  const removeTechnician = (id) => {
    deleteTechnician(id);
    onCloseModal();
  };

  useEffect(() => {
    getTechnicians();
  }, []);

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
              <th>Boiler Types</th>
              <th className={styles.actionsRow}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {technicians.list.map((technician) => (
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
                  {technician.boilerTypes.join('-')}
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
                        id: technician._id,
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
          && (
          <TechniciansForm
            onSubmit={(technician) => {
              addTechnician(technician);
              onCloseModal();
            }}
            onClose={onCloseModal}
          />
          )}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => removeTechnician(modal.meta.id)} onClose={onCloseModal} entity="Technician" />}
          {modal.type === 'UPDATE'
            && (
              <TechniciansForm
                onSubmit={(technician, id) => {
                  updateTechnician(technician, id);
                  onCloseModal();
                }}
                onClose={onCloseModal}
                technician={modal.meta.technician}
              />
            )}
        </Modal>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getTechnicians: getTechniciansAction,
    addTechnician: addTechniciansAction,
    updateTechnician: updateTechnicianaction,
    deleteTechnician: deleteTechnicianAction,
  }, dispatch)
);

const mapStateToProps = (state) => ({
  technicians: state.technicians,
});

export default connect(mapStateToProps, mapDispatchToProps)(technicianComponent);
