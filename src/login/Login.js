import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Button, Grid, TextField } from '@material-ui/core';
import { useAuth } from "../context/auth";
import { useUser } from "../context/user";
import jwt from 'jsonwebtoken';
import logo from '../img/coffee.png'
import axios from 'axios';
import './Login.css';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const { setUser } = useUser();

  function postLogin() {
    axios.post("http://3.121.183.48/api/v1/auth/login/", {
      username,
      password
    }).then(result => {
      if (result.status === 200) {
        console.log(result)
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <Container className="container" maxWidth="xs">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img className="center" style={{ width: 200, height: 200 }} src={logo} alt={"logo"}/>
        </Grid>
      </Grid>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Username" name="username" size="small" variant="outlined" onChange={e => {
                  setUsername(e.target.value);
                }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Password" name="password" size="small" type="password" variant="outlined" onChange={e => {
                  setPassword(e.target.value);
                }} />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button color="secondary" fullWidth variant="contained" onClick={postLogin}>
                  Log In
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
      { isError &&<p>The username or password provided were incorrect!</p>}
    </Container>
  );
}

export default Login;
