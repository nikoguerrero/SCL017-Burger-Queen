import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Admin from '../Admin/Admin';
import WaiterScreen from '../Waiter/WaiterScreen/WaiterScreen';
import Kitchen from '../Cook/Kitchen/Kitchen';
import Serve from '../Waiter/Serve/Serve';
import { auth } from '../../firebase';

const MainRoutes = (props) => {
  const { menu, data, setData, status, setStatus, userData } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
      if (auth.currentUser) {
        if (userData.role === 'waiter') {
          props.history.push('/menu');
        } else if (userData.role === 'cook') {
          props.history.push('/kitchen');
        } else if (userData.role === 'admin') {
          props.history.push('/admin');
        }
        setUser(auth.currentUser)
      } else {
        props.history.push('/');
      }
  }, [props.history, userData]);

  return user && (
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
        userData={userData}
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
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  );
};

export default withRouter(MainRoutes);