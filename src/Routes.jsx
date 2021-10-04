import React, { useState, useEffect, Fragment } from 'react';
import { Switch, Route, withRouter, Redirect, useHistory, useLocation } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import WaiterScreen from './components/Waiter/WaiterScreen/WaiterScreen';
import Kitchen from './components/Cook/Kitchen/Kitchen';
import Serve from './components/Serve/Serve';
import { auth } from './firebase';

const Routes = (props) => {
  const { menu, data, setData, status, setStatus, userData } = props;
  const [user, setUser] = useState(null);
  console.log(userData);

  useEffect(() => {
      if (auth.currentUser) {
        setUser(auth.currentUser)
      } else {
        props.history.push('/');
      }
  }, [props.history]);

  // const history = useHistory().goBack();
  // // console.log(history);

  const location = useLocation();
  const referer = location.state
  console.log(referer)

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
      {userData.role === 'admin' ? (
      <Route path="/admin">
        <Admin />
      </Route>
      ) : (
        <Fragment>Potatoe</Fragment>
      )}
    </Switch>
  )
};

export default withRouter(Routes);