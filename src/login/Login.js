import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:''
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
    console.log('Your name is: ' + this.state.username + ' and your password is: ' + this.state.password);
    event.preventDefault();
  } 
  
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        Login<br />
        <form>
          <label>Username:</label> <input name="user" type="text" onChange={this.handleUsername}></input><br />
          <label>Password:</label> <input name="password" type="password" onChange={this.handlePassword}></input><br />
          <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>Get your coffee</Button>
        </form>
      </div>
    );
  }
}

export default Login;
