import React, { Component } from 'react';
import TinderCard from 'react-tinder-card';
import { Card, CardContent, Chip, Typography, CardActions, Button } from '@material-ui/core';
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      candidates:''
    }

    this.onSwipe = this.onSwipe.bind(this);
    this.onCardLeftScreen = this.onCardLeftScreen.bind(this);
  }

  onSwipe(direction) {
    console.log('You swiped: ' + direction)
  }
   
  onCardLeftScreen(myIdentifier) {
    console.log(myIdentifier + ' left the screen')
  }

  render() {
    return (
      <div>
        <h1>Find your coffee match!</h1><br />
        <TinderCard className="card" onSwipe={this.onSwipe} onCardLeftScreen={() => this.onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
          <Card>
            <CardContent>
              <Typography variant= "h5" gutterBottom>
                Duarte Carmo
              </Typography>
              <Typography color="textSecondary">
                BCG Platinion Consultant
              </Typography>
              <Typography color="textSecondary">
                Denmark
              </Typography>
              <Typography variant="body" component="p">
                I am a hacker from Portugal and enjoy sharing my vim knowledge with my colleagues
              </Typography>
              <p>
                <Chip className="chip" color="primary" label="Programming" />
                <Chip className="chip" color="primary" label="Hackathon 2020" />
                <Chip className="chip" color="primary" label="VIM" />
                <Chip className="chip" color="primary" label="Travelling" />
              </p>
            </CardContent>
          </Card>
        </TinderCard>
      </div>
    );
  }
}

export default Main;
