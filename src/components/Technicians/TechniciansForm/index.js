import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Select from 'react-select';
import { Form, Field } from 'react-final-form';
import Button from '../../sharedComponents/Button';
import styles from './TechniciansForm.module.css';

const TechniciansForm = ({
  onSubmit,
  onClose,
  technician,
}) => {
  const boilerTypes = [{
    value: '5fcc1d06998cd913c71c7e01',
    label: 'Boiler type "A"',
  }, {
    value: '5fcc1d09998cd913c71c7e02',
    label: 'Boiler type "B"',
  }, {
    value: '5fcc1d0b998cd913c71c7e03',
    label: 'Boiler type "C"',
  }];

  const [state, setState] = useState({
    firstName: technician.firstName || '',
    lastName: technician.lastName || '',
    address: technician.address || '',
    phone: technician.phone || '',
    email: technician.email || '',
    birthday: moment(technician.dateOfBirth).format('YYYY-MM-DD') || '',
    monthlyCapacity: technician.monthlyCapacity || '',
    hourRate: technician.hourRate || '',
    boilerTypes: technician && technician.boilerTypes ? boilerTypes.filter(
      (boilerType) => technician.boilerTypes.includes(boilerType.value),
    ) : [],
    id: technician._id,
  });

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeDropdown = (selectedOptions) => {
    setState({
      ...state,
      boilerTypes: selectedOptions.map((option) => option.value),
    });
  };

  const submit = (values) => {
    const technicianToSub = {
      firstName: state.firstName,
      lastName: state.lastName,
      address: state.address,
      phone: state.phone,
      email: state.email,
      boilerTypes: state.boilerTypes,
      dateOfBirth: state.birthday,
      monthlyCapacity: state.monthlyCapacity,
      hourRate: state.hourRate,
    };
    onSubmit(technicianToSub, state.id);
  };

  const required = (value) => (value ? undefined : 'Required');

  const requiredSelect = (value) => ((value === null) ? 'Required' : undefined);

  return (
    <div>
      <Form
        onSubmit={submit}
        initialValues={{
          firstName: '',
          lastName: '',
          address: '',
          phone: '',
          email: '',
          birthday: '',
          monthlyCapacity: '',
          hourRate: '',
        }}
        render={({
          handleSubmit, form, submitting, pristine, values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.techniciansFormContainer}>
              <label htmlFor="firstName">
                First name
                <Field
                  name="firstName"
                  validate={required}
                  component="input"
                >
                  {({ input, meta }) => {
                    <div>
                      <input {...input} type="text" placeholder="First name" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>;
                  }}
                </Field>
              </label>
            </div>
            <div className={styles.techniciansFormContainer}>
              <label htmlFor="lastName">
                Last name
                <Field
                  name="lastName"
                  validate={required}
                  component="input"
                >
                  {({ input, meta }) => {
                    <div>
                      <input {...input} type="text" placeholder="Last name" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>;
                  }}
                </Field>
              </label>
            </div>
            <div className={styles.techniciansFormContainer}>
              <label htmlFor="address">
                Address
                <Field
                  name="address"
                  validate={required}
                  component="input"
                  onChange={onChangeInput}
                >
                  {({ input, meta }) => {
                    <div>
                      <input {...input} type="text" placeholder="Address" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>;
                  }}
                </Field>
              </label>
            </div>
            <div className={styles.techniciansFormContainer}>
              <label htmlFor="phone">
                Phone
                <Field
                  name="phone"
                  validate={required}
                  component="input"
                  onChange={onChangeInput}
                >
                  {({ input, meta }) => {
                    <div>
                      <input {...input} type="text" placeholder="Phone" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>;
                  }}
                </Field>
              </label>
            </div>
            <div className={styles.techniciansFormContainer}>
              <label htmlFor="email">
                Email
                <Field
                  name="email"
                  validate={required}
                  component="input"
                  onChange={onChangeInput}
                >
                  {({ input, meta }) => {
                    <div>
                      <input {...input} type="text" placeholder="Email" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>;
                  }}
                </Field>
              </label>
            </div>
            <div className={styles.techniciansFormContainer}>
              <label htmlFor="birthday">
                Birthday
                <Field
                  name="birthday"
                  validate={required}
                  component="input"
                  onChange={onChangeInput}
                >
                  {({ input, meta }) => {
                    <div>
                      <input {...input} type="date" placeholder="Birthday" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>;
                  }}
                </Field>
              </label>
            </div>
            <div className={styles.techniciansFormContainer}>
              <label htmlFor="monthlyCapactity">
                Monthly Capacity
                <Field
                  name="monthlyCapacity"
                  validate={required}
                  component="input"
                  onChange={onChangeInput}
                >
                  {({ input, meta }) => {
                    <div>
                      <input {...input} type="text" placeholder="Monthly capacity" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>;
                  }}
                </Field>
              </label>
            </div>
            <div className={styles.techniciansFormContainer}>
              <label htmlFor="hourRate">
                Hour rate
                <Field
                  name="hourRate"
                  validate={required}
                  component="input"
                  onChange={onChangeInput}
                >
                  {({ input, meta }) => {
                    <div>
                      <input {...input} type="text" placeholder="Hour rate" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>;
                  }}
                </Field>
              </label>
            </div>
            <div className={styles.techniciansFormContainer}>
              <label htmlFor="boilerType">Boiler Type</label>
              <Field
                defaultValue={state.boilerTypes}
                isMulti
                name="boilerTypes"
                validate={requiredSelect}
                component="select"
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onChangeDropdown}
                options={boilerTypes}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button
                btnLabel="Submit"
                type="submit"
                disabled={submitting || pristine}
                primary
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                btnLabel="Cancel"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
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
};

export default TechniciansForm;
