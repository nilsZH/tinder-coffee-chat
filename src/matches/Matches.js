import React, { Component } from 'react';
import './Matches.css';

class Matches extends Component {
  constructor(props){
    super(props);
    this.state={
      matches:''
    }
  }

  render() {
    return (
      <div>
        <h1>Matches</h1>
      </div>
    );
  }
};

export default Matches;
