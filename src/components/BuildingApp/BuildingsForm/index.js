import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import Button from '../../sharedComponents/Button';

const BuildingsForm = ({
  onSubmit,
  onClose,
  building,
}) => {
  const [state, setState] = useState({
    name: building.name || '',
    address: building.address || '',
    company: building.company || '',
    phone: building.phone || '',
    id: building._id,
  });

  const [boilerOptions, setBoilersOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pickedBoilers, setPickedBoilers] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://caldar-application.herokuapp.com/boilers');
    const json = await response.json();
    setBoilersOptions(json.map((boiler) => ({
      label: boiler.description,
      value: boiler._id,
    })));
    const boilerForDefaults = json.map((boiler) => ({
      label: boiler.description,
      value: boiler._id,
    }));
    const defValues = [];
    if (building) {
      for (let i = 0; i < building.boilers.length; i += 1) {
        boilerForDefaults.map((boiler) => {
          if (boiler.value === building.boilers[i]) {
            defValues.push(boiler);
          }
          return false;
        });
      }
    }
    setPickedBoilers(defValues);
    setLoading(false);
  }, []);

  const changeValue = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (values) => {
    console.log({
      ...values,
      boilers: values.boilers.map((boiler) => boiler.value),
    });
    // console.log(values.boilers.map((boiler) => boiler.value));
    // const buildingToSub = {
    //   name: state.name,
    //   address: state.address,
    //   company: state.company,
    //   phone: state.phone,
    //   boilers: pickedBoilers.map((boiler) => boiler.value),
    // };
    // onSubmit(buildingToSub, state.id);
  };

  const selectAdapter = () => (
    <Select
      name="boilers"
      onChange={setPickedBoilers}
      value={pickedBoilers}
      options={boilerOptions}
      isMulti
      placeholder="Select Boilers"
    />
  );

  const ReactSelectAdapter = ({ input, ...rest }) => (
    // eslint-disable-next-line
    <Select {...input} {...rest} />
  );

  return (
    <div>
      <Form
        onSubmit={submit}
        initialValues={{
          name: state.name,
          address: state.address,
          company: state.company,
          phone: state.phone,
          boilers: pickedBoilers,
        }}
        render={({ handleSubmit }) => (
          <form>
            <div>
              <label htmlFor="name">
                Building Name
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Building Name"
                />
                {/* <input
                value={state.name}
                onChange={changeValue}
                name="name" type="text"
                required /> */}
              </label>
            </div>
            <div>
              <label htmlFor="address">
                Building Address
                <Field
                  name="address"
                  component="input"
                  type="text"
                  placeholder="Building Address"
                />
                {/* <input
                  value={state.address}
                  onChange={changeValue}
                  name="address"
                  type="text"
                  required
                /> */}
              </label>
            </div>
            <div>
              <label htmlFor="company">
                Building Company
                <Field
                  name="company"
                  component="input"
                  type="text"
                  placeholder="Building Company"
                />
                {/* <input
                  value={state.company}
                  onChange={changeValue}
                  name="company"
                  type="text"
                  required
                /> */}
              </label>
            </div>
            <div>
              <label htmlFor="phone">
                Building Phone
                <Field
                  name="phone"
                  component="input"
                  type="text"
                  placeholder="Building phone"
                />
                {/* <input
                  value={state.phone}
                  onChange={changeValue}
                  name="phone"
                  type="text"
                  required
                /> */}
              </label>
            </div>
            {loading ? <div>loading</div>
              : (
                <label htmlFor="boilers">
                  Boilers:
                  {/* <Select
                    name="boilers"
                    onChange={setPickedBoilers}
                    value={pickedBoilers}
                    options={boilerOptions}
                    isMulti
                    placeholder="Select Boilers"
                  /> */}
                  <Field
                    name="boilers"
                    component={ReactSelectAdapter}
                    options={boilerOptions}
                    isMulti
                    placeholder="Select Boilers"
                  />
                </label>
              )}
            <div>
              <Button btnLabel="Cancel" onClick={onClose} />
              <Button btnLabel="Submit" primary onClick={handleSubmit} />
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
};

export default BuildingsForm;
