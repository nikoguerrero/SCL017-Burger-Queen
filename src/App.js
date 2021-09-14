import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="container mt=5">
      {/* <h1>Ñami Town</h1> */}
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/order">
            Menu order...
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
