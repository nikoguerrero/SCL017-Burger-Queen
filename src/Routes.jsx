import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WaiterScreen from './components/Waiter/WaiterScreen/WaiterScreen';
import Kitchen from './components/Cook/Kitchen/Kitchen';
import Serve from './components/Serve/Serve';


const Routes = (props) => {
  const { menu, data, setData, status, setStatus } = props;
  return (
  <Switch>
    <Route path="/menu">
      <WaiterScreen 
        menu={menu}
      />
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
      />
    </Route>
  </Switch>
  );
};

export default Routes;