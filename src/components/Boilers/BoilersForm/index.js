import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { bindActionCreators } from 'redux';
import Button from '../../sharedComponents/Button';
import styles from './boilersForm.module.css';
import TextInput from '../../sharedComponents/TextInput';
import SelectInput from '../../sharedComponents/Select';
import { required, numberHour, composeValidators } from '../../../utils/validations';
import { getBoilerTypes as getBoilerTypesAction } from '../../../redux/actions/boilerTypesAction';
import { getFormatedBoilerTypes } from '../../../redux/selectors/boilerTypesSelectors';

const BoilersForm = ({
  onSubmit,
  onClose,
  boiler,
  getBoilerTypes,
  boilerTypes,
}) => {
  useEffect(() => {
    getBoilerTypes();
  }, []);

  const submit = (values) => {
    const boilerToSub = {
      description: values.description,
      boilerType: values.boilerType.value,
      hourMaintenanceCost: values.hourMaintenanceCost,
      hourEventualCost: values.hourEventualCost,
      maintenanceRate: values.maintenanceRate,
    };
    onSubmit(boilerToSub, boiler._id);
  };

  const currentBoilerType = boiler && boiler.boilerType && boilerTypes.find(
    (boilerType) => boilerType.value === boiler.boilerType,
  );

  return (
    <div>
      <Form
        onSubmit={submit}
        initialValues={{
          description: boiler.description || 'Boiler',
          boilerType: currentBoilerType,
          hourMaintenanceCost: boiler.hourMaintenanceCost || 1,
          hourEventualCost: boiler.hourEventualCost || 1,
          maintenanceRate: boiler.maintenanceRate || 1,
        }}
        render={({
          handleSubmit, submitting, pristine,
        }) => (
          <form className={styles.boilersFormContainer} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <Field
                name="description"
                placeholder="Boiler"
                label="Description: "
                type="text"
                validate={required}
                component={TextInput}
              />
            </div>
            <div className={styles.boilersFormContainer}>
              <Field
                name="boilerType"
                label="Boiler Type: "
                component={SelectInput}
                options={boilerTypes}
                validate={required}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="hourMaintenanceCost"
                placeholder="0"
                type="text"
                label="Hour Maintenance Cost: "
                validate={composeValidators(numberHour, required)}
                component={TextInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="hourEventualCost"
                placeholder="0"
                type="text"
                label="Hour Eventual Cost: "
                validate={composeValidators(numberHour, required)}
                component={TextInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="maintenanceRate"
                placeholder="0"
                type="text"
                label="Maintenance Rate: "
                validate={composeValidators(numberHour, required)}
                component={TextInput}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button
                primary
                btnLabel="Submit"
                type="submit"
                disabled={submitting || pristine}
                onClick={handleSubmit}
              />
              <Button
                btnLabel="Cancel"
                type="button"
                onClick={onClose}
              />
            </div>
          </form>
        )}
      />
    </div>
  );
};

BoilersForm.defaultProps = {
  boiler: {},
};

BoilersForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  boiler: PropTypes.object,
  getBoilerTypes: PropTypes.func.isRequired,
  boilerTypes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  boilerTypes: getFormatedBoilerTypes(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getBoilerTypes: getBoilerTypesAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BoilersForm);
