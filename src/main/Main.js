import React, { useState, useMemo, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { Card, Container, Grid, CardContent, Chip, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './Main.css';

const db = [
  {
    username: "duarte",
    name: "Duarte Carmo",
    role: "Consultant",
    interests: ["hicking"],
    description: "This is me"
  },
  {
    username: "anke",
    name: "Anke Haas",
    role: "Consultant",
    interests: ["cars", "golf"],
    description: "This is me"
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  row: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  card: {
    float: 'top', 
  }
}));

const alredyRemoved = []
let charactersState = db 

function Main() {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()
  const classes = useStyles();

  React.useEffect(() => {
    axios({
      "method": "GET",
      "url": "http://google.de",
      "headers": {
        "content-type": "application/json",
      }
    })
    .then((response) => {
      console.log("Done")
      setCharacters(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alredyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alredyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alredyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <Container className="container" maxWidth="xs">
      <Grid container className={classes.row} spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">Find your coffee match!</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.row} spacing={3}>
        <Grid item xs={12}>
          {characters.map((character, index) =>
            <TinderCard className={classes.card} ref={childRefs[index]} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
              <Card>
                <CardContent>
                  <Typography variant= "h5" gutterBottom>
                    {character.name}
                  </Typography>
                  <Typography color="textSecondary">
                    {character.role}
                  </Typography>
                  <Typography variant="body" component="p">
                    {character.description}
                  </Typography>
                  {character.interests.map((interest) => (
                    <Chip className="chip" color="primary" label={interest.toUpperCase()} />
                  ))}
                </CardContent>
              </Card>
            </TinderCard>
          )}
        </Grid>
      </Grid>
      <Grid container className={classes.row} spacing={3}>
        <Grid item xs={5}>
          <Button color="secondary" fullWidth variant="contained" onClick={() => swipe('left')}>Swipe left!</Button>
        </Grid>
        <Grid item xs={5}>
          <Button color="secondary" fullWidth variant="contained" onClick={() => swipe('right')}>Swipe right!</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
