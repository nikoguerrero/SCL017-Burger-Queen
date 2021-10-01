import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import Login from './components/Login/Login';
import MainContent from './components/MainContent/MainContent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

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
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
            <MainContent />
          </Switch>
      </Router>
  ) : (
    <p>Loading...</p>
  )
}

export default App;
