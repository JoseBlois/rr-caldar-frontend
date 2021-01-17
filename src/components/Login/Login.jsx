/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { loginWithFirebase } from '../../redux/actions/authActions';
import Button from '../sharedComponents/Button';
import styles from './Login.module.css';

const Login = ({ login }) => {
  const onSubmitLogin = (values) => {
    login(values);
  };

  const required = (value) => (value ? undefined : 'This field is required');
  const mustBeEmail = (value) => (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value) ? undefined : 'Invalid Email');
  const composeValidators = (...validators) => (value) => (
    validators.reduce((error, validator) => error || validator(value), undefined)
  );
  return (
    <div className={styles.loginContainer}>
      <div className={styleMedia.formContainer}>
        <h1>Login</h1>
        <Form
          onSubmit={onSubmitLogin}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <label htmlFor="email" className={styles.inputLabel}>Email</label>
                <Field name="email" type="email" validate={composeValidators(required, mustBeEmail)}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} />
                      {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                    </div>
                  )}
                </Field>
                <label htmlFor="password" className={styles.inputLabel}>Password</label>
                <Field name="password" type="password" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} />
                      {meta.error && meta.touched && <div className={styles.msg}>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <div className={styles.buttonContainer}>
                <Button type="submit" btnLabel="Submit" primary onClick={handleSubmit} />
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

const mapDispatchProps = (dispatch) => (
  bindActionCreators({
    login: loginWithFirebase,
  }, dispatch)
);
Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchProps)(Login);
