import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import Button from '../../sharedComponents/Button';
import styles from './appointmentsForm.module.css';

const AppointmentsForm = ({
  onSubmit,
  onClose,
  appointment,
}) => {
  const [type, setType] = useState(appointment.type || 'eventual');

  const [buildingsOptions, setBuildingsOptions] = useState([]);
  const [boilersOptions, setBoilersOptions] = useState([]);
  const [techniciansOptions, setTechniciansOptions] = useState([]);
  const [pickedBuilding, setPickedBuilding] = useState(null);
  const [pickedBoiler, setPickedBoiler] = useState(null);
  const [pickedTechnician, setPickedTechnician] = useState(null);

  useEffect(async () => {
    const URL = 'https://caldar-application.herokuapp.com';
    const buildingsResponse = await fetch(`${URL}/buildings`);
    const buildingsData = await buildingsResponse.json();
    const allBuildings = buildingsData.map((building) => ({
      label: building.name,
      value: building._id,
    }));
    setBuildingsOptions(allBuildings);
    const boilersResponse = await fetch(`${URL}/boilers`);
    const boilersData = await boilersResponse.json();
    const allBoilers = boilersData.map((boiler) => ({
      label: boiler.description,
      value: boiler._id,
    }));
    setBoilersOptions(allBoilers);
    const techniciansResponse = await fetch(`${URL}/technicians`);
    const techniciansData = await techniciansResponse.json();
    const allTechnicians = techniciansData.map((technician) => ({
      label: technician.firstName,
      value: technician._id,
    }));
    setTechniciansOptions(allTechnicians);
    if (appointment) {
      allBuildings.map((building) => {
        if (building.value === appointment.building) {
          setPickedBuilding(building);
        }
        return false;
      });
      allBoilers.map((boiler) => {
        if (boiler.value === appointment.boiler) {
          setPickedBoiler(boiler);
        }
        return false;
      });
      allTechnicians.map((technician) => {
        if (technician.value === appointment.technician) {
          setPickedTechnician(technician);
        }
        return false;
      });
    }
  }, []);

  const submit = (values) => {
    const appointmentToSub = {
      technician: values.technician.value,
      boiler: values.boiler.value,
      building: values.building.value,
      monthlyHours: values.monthlyHours,
      type: values.type,
    };
    onSubmit(appointmentToSub, appointment._id);
  };

  const required = (value) => (value ? undefined : 'Required');

  return (
    <div>
      <Form
        onSubmit={submit}
        initialValues={{
          building: pickedBuilding,
          boiler: pickedBoiler,
          technician: pickedTechnician,
          monthlyHours: appointment.monthlyHours || '0',
          type: appointment.type || 'eventual',
        }}
        render={({ handleSubmit }) => (
          <form className={styles.appointmentsFormContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="building">
                Building:
                <Field name="building" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Select {...input} options={buildingsOptions} />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="technician">
                Technician:
                <Field name="technician" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Select {...input} options={techniciansOptions} />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="boiler">
                Boilers:
                <Field name="boiler" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Select {...input} options={boilersOptions} />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            <div className={styles.typeContainer}>
              <Field
                name="type"
                component="input"
                type="radio"
                value="eventual"
                id="eventual"
                checked={Boolean(type === 'eventual')}
                onClick={() => setType('eventual')}
              />
              <label htmlFor="eventual">Eventual</label>
              <Field
                name="type"
                component="input"
                type="radio"
                value="programmed"
                id="programmed"
                checked={Boolean(type === 'programmed')}
                onClick={() => setType('programmed')}
              />
              <label htmlFor="programmed">Programmed</label>
            </div>
            {type === 'programmed' && (
              <div className={styles.inputContainer}>
                <label htmlFor="monthlyHours">
                  Building Company
                  <Field name="monthlyHours" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <input {...input} type="text" placeholder="Monthly Hours" />
                        {meta.error && meta.touched && <div>{meta.error}</div>}
                      </div>
                    )}
                  </Field>
                </label>
              </div>
            )}
            <div className={styles.buttonContainer}>
              <Button primary={false} btnLabel="Cancel" onClick={onClose} />
              <Button
                btnLabel="Submit"
                primary
                onClick={handleSubmit}
              />
            </div>
          </form>
        )}
      />
    </div>
  );
};

AppointmentsForm.defaultProps = {
  appointment: {},
};

AppointmentsForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  appointment: PropTypes.object,
};

export default AppointmentsForm;
