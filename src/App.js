import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <div>
      {/* <h1>Ñami Town</h1> */}
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
  );
}

export default App;
