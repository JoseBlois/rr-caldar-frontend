import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import Button from '../../sharedComponents/Button';
import styles from './BuildingsForm.module.css';
import { getBoilers as getBoilersAction } from '../../../redux/actions/boilersAction';
import { getFormatedBoilers } from '../../../redux/selectors/boilersSelector';

const BuildingsForm = ({
  onSubmit,
  onClose,
  building,
  getBoilers,
  boilers,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    getBoilers();
    setLoading(false);
  }, []);

  const submit = (values) => {
    onSubmit({
      ...values,
      boilers: values.boilers.map((boiler) => boiler.value),
    }, building._id);
  };

  const required = (value) => (value ? undefined : 'Required');

  const requiredSelect = (value) => ((value === null) ? 'Required' : undefined);

  return (
    <div>
      <Form
        onSubmit={submit}
        initialValues={{
          name: building.name || '',
          address: building.address || '',
          company: building.company || '',
          phone: building.phone || '',
          boilers: building && building.boilers ? boilers.filter(
            (boiler) => building.boilers.includes(boiler.value),
          ) : null,
        }}
        render={({ handleSubmit }) => (
          <form className={styles.buildingFormContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="name">
                Building Name
                <Field name="name" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="Building name" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="address">
                Building Address
                <Field name="address" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="Building address" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="company">
                Building Company
                <Field name="company" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="Building company" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="phone">
                Building Phone
                <Field name="phone" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="Building phone" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </label>
            </div>
            {loading ? <div>loading</div>
              : (
                <div className={styles.inputContainer}>
                  <label htmlFor="boilers">
                    Boilers:
                    <Field name="boilers" validate={requiredSelect}>
                      {({ input, meta }) => (
                        <div>
                          <Select {...input} options={boilers} isMulti required />
                          {(meta.error && meta.touched && <p>{meta.error}</p>)}
                        </div>
                      )}
                    </Field>
                  </label>
                </div>
              )}
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
  boilers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  boilers: getFormatedBoilers(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getBoilers: getBoilersAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsForm);
