import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      candidates:''
    }
  }

  render() {
    return (
      <div>
        <h1>Find your coffee match!</h1><br />
        Start Swiping now!
      </div>
    );
  }
}

export default Main;
