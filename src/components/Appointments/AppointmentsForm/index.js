import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import Button from '../../sharedComponents/Button';
import styles from './appointmentsForm.module.css';
import { getBoilers as getBoilersAction } from '../../../redux/actions/boilersAction';
import { getBuildings as getBuildingsAction } from '../../../redux/actions/buildingActions';
import { getTechnicians as getTechniciansAction } from '../../../redux/actions/techniciansAction';
import { getFormatedBoilers } from '../../../redux/selectors/boilersSelector';
import { getFormatedBuildings } from '../../../redux/selectors/buildingsSelector';
import { getFormatedTechnicians } from '../../../redux/selectors/techniciansSelector';

const AppointmentsForm = ({
  onSubmit,
  onClose,
  appointment,
  getBoilers,
  boilers,
  buildings,
  getBuildings,
  technicians,
  getTechnicians,
}) => {
  const [type, setType] = useState(appointment.type || 'eventual');

  useEffect(async () => {
    getBoilers();
    getBuildings();
    getTechnicians();
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
          building: appointment && appointment.building ? buildings.find(
            (building) => appointment.building.includes(building.value),
          ) : null,
          boiler: appointment && appointment.boiler ? boilers.find(
            (boiler) => appointment.boiler.includes(boiler.value),
          ) : null,
          technician: appointment && appointment.technician ? technicians.find(
            (technician) => appointment.technician.includes(technician.value),
          ) : null,
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
                      <Select {...input} options={buildings} />
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
                      <Select {...input} options={technicians} />
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
                      <Select {...input} options={boilers} />
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
  getBoilers: PropTypes.func.isRequired,
  boilers: PropTypes.array.isRequired,
  getBuildings: PropTypes.func.isRequired,
  buildings: PropTypes.array.isRequired,
  getTechnicians: PropTypes.func.isRequired,
  technicians: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  boilers: getFormatedBoilers(state),
  buildings: getFormatedBuildings(state),
  technicians: getFormatedTechnicians(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getBoilers: getBoilersAction,
  getBuildings: getBuildingsAction,
  getTechnicians: getTechniciansAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsForm);
