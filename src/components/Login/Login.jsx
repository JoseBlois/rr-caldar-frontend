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

  return (
    <div className={styles.loginContainer}>
      <div className={styleMedia.formContainer}>
        <h1>Login</h1>
        <Form
          onSubmit={onSubmitLogin}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={styleMedia.inputWrapper}>
                <label htmlFor="email">User email</label>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  validate={required}
                />
              </div>
              <div className={styleMedia.inputWrapper}>
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  validate={required}
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button type="submit" btnLabel="LogIn" primary />
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
