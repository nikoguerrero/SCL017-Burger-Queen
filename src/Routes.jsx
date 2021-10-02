import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WaiterScreen from './components/Waiter/WaiterScreen/WaiterScreen';
import Kitchen from './components/Cook/Kitchen/Kitchen';
import Serve from './components/Serve/Serve';


const Routes = (props) => {
  const { data, setData, status, setStatus, unsubscribe } = props;
  return (
  <Switch>
    <Route path="/menu">
      <WaiterScreen />
    </Route>
    <Route path="/serve">
      <Serve 
      data={data}
      status={status}
      setStatus={setStatus}
      />
    </Route>
    <Route path="/kitchen">
      <Kitchen 
      data={data}
      setData={setData}
      status={status}
      setStatus={setStatus}
      unsubscribe={unsubscribe}
      />
    </Route>
  </Switch>
  );
};

export default Routes;