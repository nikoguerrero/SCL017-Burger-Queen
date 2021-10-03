import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import WaiterScreen from './components/Waiter/WaiterScreen/WaiterScreen';
import Kitchen from './components/Cook/Kitchen/Kitchen';
import Serve from './components/Serve/Serve';
import { withRouter } from 'react-router-dom';
import { auth } from './firebase';


const Routes = (props) => {
  const { menu, data, setData, status, setStatus } = props;
  const [user, setUser] = useState(null);
    useEffect(() => {
        if (auth.currentUser) {
          setUser(auth.currentUser)
        } else {
          props.history.push('/');
        }
    }, [props.history]);

  return (
  <Switch>
    <Route path="/admin">
      <Admin />
    </Route>
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

export default withRouter(Routes);