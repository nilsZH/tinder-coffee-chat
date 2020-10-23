import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      candidates:''
    }
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
}

export default Profile;
