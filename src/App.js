import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <h1>Ñami Town</h1> */}
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          {/* <Route path="/order">
            Menu order...
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
