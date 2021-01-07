import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import AppointmentsForm from './AppointmentsForm';
import ConfirmationMessage from '../sharedComponents/ConfirmationMessage';
import Modal from '../sharedComponents/Modal';
import styles from './appointments.module.css';

import {
  getAppointments as getAppointmentsR,
  deleteAppointment as deleteAppointmentR,
} from '../../redux/actions/appointmentActions';

const Appointments = ({ getAppointments, deleteAppointment, appointments }) => {
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

  // const [appointments, setAppointments] = useState([]);

  // const addAppointment = (appointment) => {
  //   setAppointments([...appointments, {
  //     ...appointment,
  //     id: appointments.length + 1,
  //   }]);
  //   onCloseModal();
  // };

  const removeAppointment = (id) => {
    deleteAppointment(id);
    onCloseModal();
  };

  // const updateAppointment = (updatedAppointment) => {
  //   const index = appointments.findIndex(
  //   (appointment) => appointment.id === updatedAppointment.id);
  //   const newAppointments = [...appointments];
  //   newAppointments[index] = updatedAppointment;
  //   setAppointments(newAppointments);
  //   onCloseModal();
  // };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      <div className={styles.appointmentsContainer}>
        <table className={styles.appointmentsTable}>
          <thead>
            <tr>
              <th>Building</th>
              <th>Technician</th>
              <th>Type</th>
              <th>Monthly hours</th>
              <th className={styles.actionsRow}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.list.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.building}</td>
                <td>{appointment.technician}</td>
                <td>{appointment.type}</td>
                <td>{appointment.monthlyHours}</td>
                <td>
                  <FontAwesomeIcon
                    style={{ marginRight: '10px' }}
                    icon={faPen}
                    size="lg"
                    onClick={() => setModal({
                      show: true,
                      type: 'UPDATE',
                      meta: {
                        appointment,
                        title: 'Update Appointment',
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
                        id: appointment._id,
                        title: 'Delete Appointment',
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
              title: 'Add new Appointment',
            },
          })}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {modal.show && (
        <Modal title={modal.meta.title} onClose={onCloseModal}>
          {modal.type === 'ADD'
            && <AppointmentsForm onSubmit={() => console.log('onSubmit Add')} onClose={onCloseModal} />}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => removeAppointment(modal.meta.id)} onClose={onCloseModal} entity="Appointment" />}
          {modal.type === 'UPDATE'
            && (
              <AppointmentsForm
                onSubmit={() => console.log('onSubmit Update')}
                onClose={onCloseModal}
                appointment={modal.meta.appointment}
              />
            )}
        </Modal>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getAppointments: getAppointmentsR,
    deleteAppointment: deleteAppointmentR,
  }, dispatch)
);

const mapStateToProps = (state) => ({
  appointments: state.appointments,
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
