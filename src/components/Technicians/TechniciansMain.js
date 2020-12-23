import React, { useState } from 'react';
import techniciansData from '../../mock/technicians.json';
import Form from './Form';

const TechniciansMain = () => {
  const [technicians, setTechnicians] = useState(techniciansData);

  const addTechnician = (newTechnician) => {
    setTechnicians(
      [...technicians, newTechnician],
    );
  };

  const [editItem, setEditItem] = useState({});

  const update = (item) => {
    setEditItem(item);
  };

  const deleteTechnician = (id) => {
    const deletedTechnician = technicians.filter((technician) => technician.id !== id);
    setTechnicians(deletedTechnician);
  };

  const saveTechnician = () => {
    const indexTechnician = technicians
      .findIndex((technician) => technician.id === editItem.id);
    const newList = technicians;
    newList[indexTechnician] = editItem;

    setTechnicians(newList);
    setEditItem(undefined);
  };

  const inputChange = (e) => {
    setEditItem({
      ...editItem,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="MainContainer">
      <h1>Technicians</h1>
      <table>
        <thead>
          <tr className="nameOfItem">
            <th>First name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Boiler Types</th>
            <th className="main">Actions</th>
          </tr>
        </thead>
        <tbody>

          {technicians.map((itemTechnicians) => {
            if (editItem && editItem.id === itemTechnicians.id) {
              return (
                <tr key={itemTechnicians.id}>
                  <td>
                    <input
                      type="text"
                      name="first_name"
                      onChange={inputChange}
                      value={editItem.first_name}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="last_name"
                      onChange={inputChange}
                      value={editItem.last_name}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      onChange={inputChange}
                      value={editItem.address}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="phone"
                      onChange={inputChange}
                      value={editItem.phone}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      onChange={inputChange}
                      value={editItem.email}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="boiler_types"
                      onChange={inputChange}
                      value={editItem.boiler_types}
                    />
                  </td>
                  <td>
                    <button type="button" onClick={saveTechnician}>
                      Save
                    </button>
                  </td>
                </tr>
              );
            }
            return (
              <tr key={itemTechnicians.id}>
                <td>
                  { itemTechnicians.first_name }
                </td>
                <td>
                  { itemTechnicians.last_name }
                </td>
                <td>
                  { itemTechnicians.address }
                </td>
                <td>
                  { itemTechnicians.phone }
                </td>
                <td>
                  { itemTechnicians.email }
                </td>
                <td>
                  { itemTechnicians.boiler_types }
                </td>
                <td>
                  <button type="button" onClick={() => update(itemTechnicians)}>
                    Update
                  </button>
                  <button type="button" onClick={() => deleteTechnician(itemTechnicians.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <Form addTechnician={addTechnician} />
        </tbody>
      </table>
    </div>
  );
};
export default TechniciansMain;
