import React, { useState } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Login from './login/Login';
import Main from './main/Main';
import Profile from './profile/Profile';
import Matches from './matches/Matches';
import PrivateRoute from './PrivateRoute';
import { AuthContext, useAuth } from "./context/auth";
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App(props) {
  const classes = useStyles();
  const exisitinTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(exisitinTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  function logOut() {
    setAuthTokens();
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Coffee Time
            </Typography>
            { authTokens ? 
                <Button color="inherit" onClick={logOut}>Logout</Button> :
                <Button color="inherit">Login</Button>
            }         
          </Toolbar>
        </AppBar>
        <Route path="/login" component={Login} />
        <PrivateRoute exact={true} path="/" component={Main} />
        <PrivateRoute exact={true} path="/profile" component={Profile} />
        <PrivateRoute exact={true} path="/matches" component={Matches} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
