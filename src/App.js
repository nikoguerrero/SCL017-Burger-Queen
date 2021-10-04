import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import Login from './components/Login/Login';
import MainContent from './components/MainContent/MainContent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Loading from './Loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    })
  }, []);

  return !loading ? (
    <Router>
      <Switch>
      <Route path="*" exact>
        { user !== null ? ( <MainContent /> ) : ( <Login /> )}
      </Route>
      </Switch>
    </Router>
  ) : (
    <Loading />
  )
};

export default App;
