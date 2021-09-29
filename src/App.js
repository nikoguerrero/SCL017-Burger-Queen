import React, { useState, useEffect, Fragment } from 'react';
import { auth } from './firebase';
import Login from './components/Login/Login';
import WaiterScreen from './components/WaiterScreen/WaiterScreen';
import Kitchen from './components/Kitchen/Kitchen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, []);

  return user !== false ? (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/menu">
            <WaiterScreen />
          </Route>
          <Route path="/kitchen">
            <Kitchen />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  ) : (
    <p>Loading...</p>
  )
}

export default App;
