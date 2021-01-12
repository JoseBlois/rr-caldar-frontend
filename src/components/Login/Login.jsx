import { Form, Field } from 'final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loginWithFirebase,
} from '../../redux/actions/authActions';

const Login = ({
  login,
}) => {
  const onSubmitLogin = (values) => {
    login(values);
  };
};
