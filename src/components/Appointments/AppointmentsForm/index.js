import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import Button from '../../sharedComponents/Button';
import SelectInput from '../../sharedComponents/Select';
import styles from './appointmentsForm.module.css';
import { getBoilers as getBoilersAction } from '../../../redux/actions/boilersAction';
import { getBuildings as getBuildingsAction } from '../../../redux/actions/buildingActions';
import { getTechnicians as getTechniciansAction } from '../../../redux/actions/techniciansAction';
import { getFormattedBoilers } from '../../../redux/selectors/boilersSelectors';
import { getFormattedBuildings } from '../../../redux/selectors/buildingsSelectors';
import { getFormattedTechnicians } from '../../../redux/selectors/techniciansSelectors';
import { required } from '../../../utils/validations';
import TextInput from '../../sharedComponents/TextInput';

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
        render={({ handleSubmit, values }) => (
          <form className={styles.appointmentsFormContainer}>
            <div className={styles.inputContainer}>
              <Field
                name="building"
                label="Building"
                component={SelectInput}
                options={buildings}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="technician"
                label="Technician"
                component={SelectInput}
                options={technicians}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="boiler"
                label="Boiler"
                component={SelectInput}
                options={boilers}
              />
            </div>
            <div className={styles.typeContainer}>
              <Field
                label="Eventual"
                name="type"
                component={TextInput}
                type="radio"
                value="eventual"
              />
              <Field
                label="Programmed"
                name="type"
                component={TextInput}
                type="radio"
                value="programmed"
              />
            </div>
            {values.type === 'programmed' && (
              <div className={styles.inputContainer}>
                <Field
                  name="monthlyHours"
                  validate={required}
                  placeholder="Monthly Hours"
                  label="Monthly Hours"
                  component={TextInput}
                  type="text"
                />
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
  boilers: getFormattedBoilers(state),
  buildings: getFormattedBuildings(state),
  technicians: getFormattedTechnicians(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getBoilers: getBoilersAction,
  getBuildings: getBuildingsAction,
  getTechnicians: getTechniciansAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsForm);
