import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WaiterScreen from './components/Waiter/WaiterScreen/WaiterScreen';
import Kitchen from './components/Cook/Kitchen/Kitchen';
import Serve from './components/Serve/Serve';


const Routes = () => {
  return (
  <Switch>
    <Route path="/menu">
      <WaiterScreen />
    </Route>
    <Route path="/serve">
      <Serve />
    </Route>
    <Route path="/kitchen">
      <Kitchen />
    </Route>
  </Switch>
  );
};

export default Routes;