import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Login from './login/Login';
import Main from './main/Main';
import Profile from './profile/Profile';
import Matches from './matches/Matches';
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

function App() {
  const name = 'John Doe'
  const isAuthenticated = true
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Coffee Time
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Route path="/login" component={Login} />
      {
      isAuthenticated ? 
      <>
      <Route exact={true} path="/" component={Main} />
      <Route exact={true} path="/profile" component={Profile} />
      <Route exact={true} path="/matches" component={Matches} />
      </> : <Redirect to="/login" />
      }
    </div>
  );
}

export default App;
