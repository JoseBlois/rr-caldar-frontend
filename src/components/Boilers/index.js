import React from 'react';
import { Route } from 'react-router-dom';
import Boilers from './boilers';

export default function BoilersApp() {
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
