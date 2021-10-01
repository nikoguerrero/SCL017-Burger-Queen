import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WaiterScreen from './components/Waiter/WaiterScreen/WaiterScreen';
import Kitchen from './components/Cook/Kitchen/Kitchen';
import Serve from './components/Serve/Serve';


const Routes = (props) => {
  const { data, fetchData } = props;
  return (
  <Switch>
    <Route path="/menu">
      <WaiterScreen />
    </Route>
    <Route path="/serve">
      <Serve 
      data={data}
      />
    </Route>
    <Route path="/kitchen">
      <Kitchen 
      data={data}
      fetchData={fetchData}
      />
    </Route>
  </Switch>
  );
};

export default Routes;