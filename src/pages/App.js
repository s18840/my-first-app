import React from 'react';
import {GlobalStyle} from '../styles/GlobalStyle';
import Dashboard from './Dashboard';
import WelcomePage from './WelcomePage';
import ProfilePage from "./ProfilePage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route exact path="/welcome">
            <WelcomePage/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/profile">
            <ProfilePage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
