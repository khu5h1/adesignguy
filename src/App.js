import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./Components/Auth.js";
import MainPage from "./Components/MainPage.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/register">
          <Auth />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>s
      </Switch>
    </Router>
  );
}

export default App;
