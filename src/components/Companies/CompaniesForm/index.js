/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import Button from '../../sharedComponents/Button';
import styles from './companiesForm.module.css';

const CompaniesForm = ({
  onSubmit,
  onClose,
  company,
}) => {
  const [state, setState] = useState({
    name: company.name || '',
    address: company.address || '',
    cuit: company.cuit || 0,
    phone: company.phone || 0,
    email: company.email || '',
    id: company._id,
  });

  const required = (value) => (value ? undefined : 'This field is required');
  const mustBeNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined);
  const mustBeEmail = (value) => (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value) ? undefined : 'Invalid Email');
  const composeValidators = (...validators) => (value) => (
    validators.reduce((error, validator) => error || validator(value), undefined)
  );

  const btSubmit = (value) => {
    const companyToSub = {
      name: value.name,
      address: value.address,
      cuit: value.cuit,
      phone: value.phone,
      email: value.email,
    };
    onSubmit(companyToSub, state.id);
  };

  return (
    <div>
      <Form
        onSubmit={btSubmit}
        initialValues={{
          name: '',
          address: '',
          cuit: 0,
          phone: 0,
          email: '',
        }}
        render={({
          handleSubmit,
          form,
        }) => (
          <form onSubmit={handleSubmit} className={styles.companiesFormContainer}>
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <Field name="address" type="text" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="cuit">CUIT</label>
              <Field name="cuit" type="text" validate={composeValidators(required, mustBeNumber)}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <Field name="phone" type="text" validate={composeValidators(required, mustBeNumber)}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" validate={composeValidators(required, mustBeEmail)}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.buttonContainer}>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button type="submit" btnLabel="Submit" primary />
            </div>
          </form>
        )}
      />
    </div>
  );
};

CompaniesForm.defaultProps = {
  company: {},
};

CompaniesForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  company: PropTypes.object,
};

export default CompaniesForm;
