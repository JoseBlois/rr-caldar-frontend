import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import TextInput from '../../sharedComponents/TextInput';
import Button from '../../sharedComponents/Button';
import {
  number,
  email,
  required,
  composeValidators,
  minLength,
} from '../../../utils/validations';
import styles from './companiesForm.module.css';

const CompaniesForm = ({
  onSubmit,
  onClose,
  company,
}) => {
  const btSubmit = (values) => {
    const companyToSub = {
      name: values.name,
      address: values.address,
      cuit: values.cuit,
      phone: values.phone,
      email: values.email,
    };
    onSubmit(companyToSub, company._id);
  };

  return (
    <div>
      <Form
        onSubmit={btSubmit}
        initialValues={{
          name: company.name || '',
          address: company.address || '',
          cuit: company.cuit || '',
          phone: company.phone || '',
          email: company.email || '',
        }}
        render={({
          handleSubmit,
          submitting,
          pristine,
        }) => (
          <form onSubmit={handleSubmit} className={styles.companiesFormContainer}>
            <div className={styles.inputContainer}>
              <Field
                label="Name"
                placeholder="Name"
                name="name"
                type="text"
                validate={required}
                component={TextInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                label="Address"
                placeholder="Address"
                name="address"
                type="text"
                validate={required}
                component={TextInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                label="CUIT"
                placeholder="CUIT"
                name="cuit"
                type="text"
                validate={composeValidators(number, required)}
                component={TextInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                label="Phone"
                placeholder="Phone"
                name="phone"
                type="text"
                validate={composeValidators(number, required, minLength(9))}
                component={TextInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                label="Email"
                placeholder="Email"
                name="email"
                type="text"
                validate={composeValidators(email, required)}
                component={TextInput}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button
                primary
                btnLabel="Submit"
                type="submit"
                disabled={submitting || pristine}
                onClick={handleSubmit}
              />
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
