/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import style from './ListItem.module.css';

const ListItem = (props) => {
  const { comp, delCompany } = props;
  return (
    <div className={style.ListItem}>
      <table>
        <tr>
          <td>{comp.id}</td>
          <td>{comp.name}</td>
          <td>{comp.address}</td>
          <td>{comp.email}</td>
          <td>{comp.cuit}</td>
          <td>{comp.phone}</td>
          <td><button onClick={delCompany.bind(this, comp.id)} style={btnStyle}>X</button></td>
        </tr>
      </table>
    </div>
  );
};

const btnStyle = {
  // display: 'flex',
  background: '#ff0000',
  color: 'white',
  border: 'solid black 1px',
  margin: '0 15px 0 0',
  padding: '1px',
  borderRadius: '20%',
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
