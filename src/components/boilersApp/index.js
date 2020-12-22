import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import boilersData from '../../mocks/boilers.json';
import Header from './header';
import Boilers from './boilers';
import AddBoiler from './addBoiler';
import './BoilersApp.css';

export default function BoilerApp() {
  const [boilers, setBoilers] = useState(boilersData);
  const [max, setMax] = useState(boilers.length);

  const deleteBoiler = (id) => {
    setBoilers([...boilers.filter((boiler) => boiler.id !== id)]);
  };

  const addBoiler = (newBoiler) => {
    const boiler = newBoiler;
    boiler.id = boilers[boilers.length - 1].id + 1;
    setBoilers([...boilers, boiler]);
    setMax(max + 1);
  };

  const updateBoiler = (updatedBoiler) => {
    setBoilers(boilers.map((boiler) => {
      if (boiler.id === updatedBoiler.id) {
        return updatedBoiler;
      }
      return boiler;
    }));
  };

  const searchBoiler = (id) => boilers.find((boiler) => boiler.id === id);

  return (
    <>
      <Header />
      <div>
        <Route path="/boilers/add">
          <AddBoiler addBoiler={addBoiler} />
        </Route>
        <Route exact path="/boilers/">
          <Boilers
            updateBoiler={updateBoiler}
            searchBoiler={searchBoiler}
            deleteBoiler={deleteBoiler}
            boilers={boilers}
          />
        </Route>
      </div>
    </>
  );
}
