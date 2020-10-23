import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Button, Grid, TextField } from '@material-ui/core';
import { useAuth } from "../context/auth";
import jwt from 'jsonwebtoken';
import axios from 'axios';
import './Login.css';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
//    axios.post("http://www.dummy.restapiexample.com/create", {
//      userName,
//      password
//    }).then(result => {
//      if (result.status !== 200) {
//        setAuthTokens(jwt.sign({ foo: 'bar' }, 'shhhhh'));
//        setLoggedIn(true);
//      } else {
//        setIsError(true);
//      }
//    }).catch(e => {
//      setIsError(true);
//    });
    setAuthTokens(jwt.sign({ foo: 'bar' }, 'shhhhh'));
    setLoggedIn(true);    
  }

  if (isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <Container className="container" maxWidth="xs">
      <img src="../public/coffee.png" />
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Username" name="username" size="small" variant="outlined" onChange={e => {
                  setUserName(e.target.value);
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
