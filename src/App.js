import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
