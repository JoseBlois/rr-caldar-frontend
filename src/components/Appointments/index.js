import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import AppointmentsForm from './AppointmentsForm';
import ConfirmationMessage from '../sharedComponents/ConfirmationMessage';
import Modal from '../sharedComponents/Modal';
import styles from './appointments.module.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
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

  const addAppointment = (appointment) => {
    setAppointments([...appointments, {
      ...appointment,
      id: appointments.length + 1,
    }]);
    onCloseModal();
  };

  const removeAppointment = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
    onCloseModal();
  };

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
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.building}</td>
                <td>{appointment.technician}</td>
                <td>{appointment.type}</td>
                <td>{appointment.monthlyHours}</td>
                <td>
                  <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faPen} size="lg" />
                  <FontAwesomeIcon
                    icon={faTrash}
                    size="lg"
                    onClick={() => setModal({
                      show: true,
                      type: 'DELETE',
                      meta: {
                        id: appointment.id,
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
            && <AppointmentsForm onSubmit={addAppointment} onClose={onCloseModal} />}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => removeAppointment(modal.meta.id)} onClose={onCloseModal} entity="Appointment" />}
        </Modal>
      )}
    </>
  );
};

export default Appointments;
