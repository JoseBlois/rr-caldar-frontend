import React from 'react';
import { Route } from 'react-router-dom';
import Boilers from './Boilers';

export default function BoilersAppF() {
  return (
    <>
      <div>
        <Route exact path="/boilers/">
          <Boilers />
        </Route>
      </div>
    </>
  );
}
