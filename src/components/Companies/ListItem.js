/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { comp, delCompany } = props;
  return (
    <div>
      <p>
        {comp.id}
        {comp.name}
        {comp.address}
        {comp.email}
        {comp.cuit}
        {comp.phone}
        <button onClick={delCompany.bind(this, comp.id)} style={btnStyle}>X</button>
      </p>
    </div>
  );
};

const btnStyle = {
  background: '#ff0000',
  color: 'white',
  border: 'solid black 1px',
  margin: '0 15px 0 0',
  padding: '1px',
  borderRadius: '20%',
  float: 'right',
};

ListItem.propTypes = {
  comp: PropTypes.exact(
    {
      id: PropTypes.number,
      name: PropTypes.string,
      address: PropTypes.string,
      email: PropTypes.string,
      cuit: PropTypes.number,
      phone: PropTypes.string,
    },
  ).isRequired,
  delCompany: PropTypes.func.isRequired,
};

export default ListItem;
