import React from "react";
import "./App.css";
import Login from "./components/login-form/login-form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from './components/main-page/mainPage';
import Registration from "./components/registration/registration";
import Admin from './components/admin/admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/mainPage" component={MainPage} />
        <Route path="/registration" component={Registration} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
