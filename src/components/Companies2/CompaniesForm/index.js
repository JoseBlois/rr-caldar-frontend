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

  const btSubmit = () => {
    const companyToSub = {
      name: state.name,
      address: state.address,
      cuit: state.cuit,
      phone: state.phone,
      email: state.email,
    };
    onSubmit(companyToSub, state.id);
  };

  return (
    <div>
      <Form
        onSubmit={btSubmit}
        initialValues={{ description: '' }}
        render={({
          handleSubmit,
          form,
        }) => (
          <form onSubmit={handleSubmit} className={styles.boilerTypesFormContainer}>
            <div>
              <label htmlFor="Name">Name</label>
              <Field name="Name" type="text" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="Address">Address</label>
              <Field name="Address" type="text" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="CUIT">CUIT</label>
              <Field name="CUIT" type="text" validate={composeValidators(required, mustBeNumber)}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="Phone">Phone</label>
              <Field name="Phone" type="text" validate={composeValidators(required, mustBeNumber)}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} />
                    {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <Field name="Email" type="text" validate={composeValidators(required, mustBeEmail)}>
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
