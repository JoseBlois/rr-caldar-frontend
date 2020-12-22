/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const ListItem = (delCompany, comp) => {
  const [Item] = useState({
    id: comp.id,
    name: comp.name,
    address: comp.address,
    email: comp.email,
    cuit: comp.cuit,
    phone: comp.phone,
  });
  return (
    <div>
      <p>
        {Item.id}
        {Item.name}
        {Item.address}
        {Item.email}
        {Item.cuit}
        {Item.phone}
        <button onClick={delCompany.bind(this, Item.id)} style={btnStyle}>X</button>
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

export default ListItem;
