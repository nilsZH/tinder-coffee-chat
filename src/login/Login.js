import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container, Button, Grid, TextField } from '@material-ui/core';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password: ''
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    let login = 'test';
    if (this.state.password === login) {
      this.setState({isAuthenticated: true})
      this.history.push('/')
    }
    event.preventDefault();
  } 
  
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
        <Container className="container" maxWidth="xs">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Username" name="username" size="small" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Password" name="password" size="small" type="password" variant="outlined" />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button color="secondary" fullWidth type="submit" variant="contained">
                      <Link to='/'>Log in</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Container>
    );
  }
}

export default Login;
