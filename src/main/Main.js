import React, { useState } from 'react';
import { Card, Container, Grid, CardContent, Chip, Typography, Button, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './Main.css';

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

function Main() {
  const [characters, setCharacters] = useState()
  const classes = useStyles();
  React.useEffect(() => {
    axios({
      "method": "GET",
      "url": "http://3.121.183.48/api/v1/users/",
      "headers": {
        "content-type": "application/json",
      }
    })
    .then((response) => {
      setCharacters(response.data.filter(user => {
        return user.available
      }))
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  
  const handleLeft = (event) => {
    console.log(event)
    let newCharacters = characters.splice(1,)
    setCharacters(newCharacters)
  }

  const handleRight = (event) => {
    console.log(event)
    let newCharacters = characters.splice(1,)
    setCharacters(newCharacters)
  }

  let card;
  if (characters !== undefined && characters.length !== 0) {
    card = <Card>
    <CardContent>
      <Typography variant= "h5" gutterBottom>
        {characters[0].username} <Chip size="small" 
                label={characters[0].available ? "Available" : "Unavailable"} 
                color={characters[0].available ? "Primary" : "Basic"} /> 
      </Typography>
      <Typography color="textSecondary">
        {characters[0].email} 
      </Typography>
      <Typography variant="body" component="p">
        {characters[0].description}
      </Typography>
      <Typography variant="body" component="p">
        {characters[0].role}
      </Typography>
        {characters[0].interest_strings.map((interest) => (
          <Chip className="chip" color="primary" label={interest} />
        ))}
      <CardActions>
        <Button color="secondary" variant="contained" size="small" onClick={handleLeft}>Swipe Left</Button>
        <Button style={{marginLeft: 80}} color="secondary" variant="contained" size="small" onClick={handleRight}>Swipe Right</Button>
      </CardActions>
    </CardContent>
  </Card>;
  } else {
    card = <p>Everybody seems busy...</p>;
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
          {card}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
