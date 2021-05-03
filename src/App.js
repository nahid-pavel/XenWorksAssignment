import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import LoginWithPhone from "./components/login/LoginWithPhone";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginWithOTP from "./components/login/LoginWithOTP";
import LoginWithEmail from "./components/login/LoginWithEmail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/loginphone" component={LoginWithPhone} />
          <Route exact path="/loginEmail" component={LoginWithEmail} />
          <Route exact path="/verify/:type" component={LoginWithOTP} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
