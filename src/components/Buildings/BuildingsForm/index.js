import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import SelectInput from '../../sharedComponents/Select';
import TextInput from '../../sharedComponents/TextInput';
import Button from '../../sharedComponents/Button';
import styles from './BuildingsForm.module.css';
import { getBoilers as getBoilersAction } from '../../../redux/actions/boilersAction';
import { getCompanies as getCompaniesAction } from '../../../redux/actions/companiesActions';
import { getFormattedBoilers } from '../../../redux/selectors/boilersSelectors';
import { getFormattedCompanies } from '../../../redux/selectors/companiesSelectors';
import { required } from '../../../utils/validations';

const BuildingsForm = ({
  onSubmit,
  onClose,
  building,
  getBoilers,
  getCompanies,
  boilers,
  companies,
}) => {
  useEffect(async () => {
    getBoilers();
    getCompanies();
  }, []);

  const submit = (values) => {
    onSubmit({
      ...values,
      boilers: values.boilers.map((boiler) => boiler.value),
    }, building._id);
  };

  return (
    <div>
      <Form
        onSubmit={submit}
        initialValues={{
          name: building.name || '',
          address: building.address || '',
          company: building && building.company ? companies.find(
            (company) => building.company === company.value,
          ) : null,
          phone: building.phone || '',
          boilers: building && building.boilers ? boilers.filter(
            (boiler) => building.boilers.includes(boiler.value),
          ) : null,
        }}
        render={({ handleSubmit }) => (
          <form className={styles.buildingFormContainer}>
            <div className={styles.inputContainer}>
              <Field
                component={TextInput}
                name="name"
                type="text"
                placeholder="Name"
                label="Name"
                validate={required}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                component={TextInput}
                name="address"
                type="text"
                placeholder="Address"
                label="Address"
                validate={required}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="company"
                label="Company"
                component={SelectInput}
                options={companies}
                validate={required}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                component={TextInput}
                name="phone"
                type="text"
                placeholder="Phone"
                label="Phone"
                validate={required}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="boilers"
                isMulti
                label="Boilers"
                component={SelectInput}
                options={boilers}
                validate={required}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button type="submit" btnLabel="Submit" primary onClick={handleSubmit} />
            </div>
          </form>
        )}
      />
    </div>
  );
};

BuildingsForm.defaultProps = {
  building: {
    boilers: ['', '', ''],
  },
};

BuildingsForm.propTypes = {
  building: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  getBoilers: PropTypes.func.isRequired,
  getCompanies: PropTypes.func.isRequired,
  boilers: PropTypes.array.isRequired,
  companies: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  boilers: getFormattedBoilers(state),
  companies: getFormattedCompanies(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getBoilers: getBoilersAction,
  getCompanies: getCompaniesAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsForm);
