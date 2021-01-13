import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { bindActionCreators } from 'redux';
import Button from '../../sharedComponents/Button';
import styles from './TechniciansForm.module.css';
import TextInput from '../../sharedComponents/TextInput';
import SelectInput from '../../sharedComponents/Select';
import { required, email, composeValidators } from '../../../utils/validations';
import { getBoilerTypes as getBoilerTypesAction } from '../../../redux/actions/boilerTypesAction';
import { getFormatedBoilerTypes } from '../../../redux/selectors/boilerTypesSelectors';

const TechniciansForm = ({
  onSubmit,
  onClose,
  technician,
  getBoilerTypes,
  boilerTypes,
}) => {
  useEffect(() => {
    getBoilerTypes();
  }, []);

  const submit = (values) => {
    const technicianToSub = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      phone: values.phone,
      email: values.email,
      boilerTypes: values.boilerTypes.map((boilerType) => boilerType.value),
      dateOfBirth: values.birthday,
      monthlyCapacity: values.monthlyCapacity,
      hourRate: values.hourRate,
    };
    onSubmit(technicianToSub, technician._id);
  };

  return (
    <div>
      <Form
        onSubmit={submit}
        initialValues={{
          firstName: technician.firstName,
          lastName: technician.lastName,
          address: technician.address,
          phone: technician.phone,
          email: technician.email,
          birthday: moment(technician.dateOfBirth).format('YYYY-MM-DD'),
          monthlyCapacity: technician.monthlyCapacity,
          hourRate: technician.hourRate,
          boilerTypes: technician && technician.boilerTypes ? boilerTypes.filter(
            (boilerType) => technician.boilerTypes.includes(boilerType.value),
          ) : [],
        }}
        render={({
          handleSubmit, submitting, pristine,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.techniciansFormContainer}>
              <Field
                name="firstName"
                placeholder="First Name"
                label="First Name"
                validate={required}
                component={TextInput}
              />
            </div>
            <div className={styles.techniciansFormContainer}>
              <Field
                name="lastName"
                placeholder="Last Name"
                label="Last Name"
                validate={required}
                component={TextInput}
              />
            </div>
            <div className={styles.techniciansFormContainer}>
              <Field
                name="address"
                placeholder="Address"
                label="Address"
                validate={required}
                component={TextInput}
              />
            </div>
            <div className={styles.techniciansFormContainer}>
              <Field
                name="phone"
                placeholder="Phone"
                label="Phone"
                validate={required}
                component={TextInput}
              />
            </div>
            <div className={styles.techniciansFormContainer}>
              <Field
                name="email"
                placeholder="Email"
                label="Email"
                validate={composeValidators(required, email)}
                component={TextInput}
              />
            </div>
            <div className={styles.techniciansFormContainer}>
              <Field
                name="birthday"
                placeholder="Birthday"
                label="Birthday"
                validate={required}
                component={TextInput}
                type="date"
              />
            </div>
            <div className={styles.techniciansFormContainer}>
              <Field
                name="monthlyCapacity"
                placeholder="Monthly Capacity"
                label="Monthly Capacity"
                validate={required}
                component={TextInput}
              />
            </div>
            <div className={styles.techniciansFormContainer}>
              <Field
                name="hourRate"
                placeholder="Hour Rate"
                label="Hour Rate"
                validate={required}
                component={TextInput}
              />
            </div>
            <div className={styles.techniciansFormContainer}>
              <Field
                name="boilerTypes"
                isMulti
                label="Boiler Types"
                component={SelectInput}
                options={boilerTypes}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button
                primary
                btnLabel="Submit"
                type="submit"
                disabled={submitting || pristine}
                onClick={handleSubmit}
              />
              <Button
                btnLabel="Cancel"
                type="button"
                onClick={onClose}
              />
            </div>
          </form>
        )}
      />
    </div>
  );
};

TechniciansForm.defaultProps = {
  technician: {},
};

TechniciansForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  technician: PropTypes.object,
  getBoilerTypes: PropTypes.func.isRequired,
  boilerTypes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  boilerTypes: getFormatedBoilerTypes(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getBoilerTypes: getBoilerTypesAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TechniciansForm);
