import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { loginWithFirebase } from '../../redux/actions/authActions';
import Button from '../sharedComponents/Button';
import TextInput from '../sharedComponents/TextInput';
import { email, required, composeValidators } from '../../utils/validations';
import styles from './login.module.css';

const Login = ({ login }) => {
  const onSubmitLogin = (values) => {
    login(values);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <Form
          onSubmit={onSubmitLogin}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <Field
                  name="email"
                  validate={composeValidators(required, email)}
                  component={TextInput}
                  label="Email"
                  placeholder="Email"
                />
                <Field
                  name="password"
                  validate={required}
                  component={TextInput}
                  type="password"
                  label="Password"
                  placeholder="Password"
                />
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
