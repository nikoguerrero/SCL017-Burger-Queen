import { auth } from './firebase';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

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
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/menu">
            <Menu />
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <p>Loading...</p>
  )
}

export default App;
