import Login from './components/Login/Login';
import Menu from './components/Menu';
import Navbar from './components/Navbar/Navbar';
import Breakfast from './components/Breakfast/Breakfast';

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
            <Breakfast />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
