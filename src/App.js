import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import Login from './login/Login';
import Main from './main/Main';
import Profile from './profile/Profile';
import Matches from './matches/Matches';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Coffee Time
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Route path="/login" component={Login} />
      <Route exact={true} path="/" component={Main} />
      <Route exact={true} path="/profile" component={Profile} />
      <Route exact={true} path="/matches" component={Matches} />
    </div>
  );
}

export default App;
