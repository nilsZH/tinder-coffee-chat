import React, { useState } from 'react';
import { Link, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button} from '@material-ui/core/';
import { AccountCircle } from '@material-ui/icons'
import Login from './login/Login';
import Main from './main/Main';
import Profile from './profile/Profile';
import Matches from './matches/Matches';
import PrivateRoute from './PrivateRoute';
import { AuthContext, useAuth } from "./context/auth";
import { UserContext, useUser } from "./context/user";
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
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const exisitinTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(exisitinTokens);
  const history = useHistory();

  function handleProfile() {
    history.push("/profile");
    setAnchorEl(null);
  }

  function handleMatches() {
    history.push("/matches");
    setAnchorEl(null);
  }

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  function logOut() {
    setAuthTokens();
    setAnchorEl(null);
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <UserContext.Provider value={{id: 1, username: "admin"}}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Coffee Time
              </Link>
            </Typography>
            { authTokens ? 
                <div>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleProfile}>Profile</MenuItem>
                      <MenuItem onClick={handleMatches}>Matches</MenuItem>
                      <MenuItem onClick={logOut}>Logout</MenuItem>
                    </Menu>
                  </div> :
                <Button color="inherit">Login</Button>
            }         
          </Toolbar>
        </AppBar>
        <Route path="/login" component={Login} />
        <PrivateRoute exact={true} path="/" component={Main} />
        <PrivateRoute exact={true} path="/profile" component={Profile} />
        <PrivateRoute exact={true} path="/matches" component={Matches} />
      </div>
    </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
