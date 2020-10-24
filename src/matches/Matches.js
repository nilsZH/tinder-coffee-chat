import React, { Component, useState } from 'react';
import { Container, Grid, CardContent, Chip, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ChatIcon from '@material-ui/icons/Chat';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useUser } from '../context/user';
import axios from 'axios';
import './Matches.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: "center",
    },
    row: {
      justifyContent: 'center',
      textAlign: 'center'
    }
}));

function Matches() {
  const [matches, setMatches] = useState()
  const classes = useStyles();
  const { username } = useUser()

  React.useEffect(() => {
    axios({
      "method": "GET",
      "url": "http://3.121.183.48/api/v1/users/",
      "headers": {
        "content-type": "application/json",
      }
    })
    .then((response) => {
      console.log(username)
      setMatches(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  let rows;
  if (matches !== undefined && matches.length !== 0) {
    rows = matches.map((match) => (
      <TableRow key={match.id}>
        <TableCell component="th" scope="row">
          {match.username}
        </TableCell>
        <TableCell>
          <Chip size="small" 
                label={match.available ? "Available" : "Unavailable"} 
                color={match.available ? "Primary" : "Basic"} />
        </TableCell>
        <TableCell>{match.link}</TableCell>
      </TableRow>
    ))
  }

  return (
    <Container className={classes.root} maxWidth="xs">
        <Grid container className={classes.row} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Matches</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.row} spacing={3}>
          <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell >Availability</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows}
              </TableBody>
            </Table>
          </TableContainer>
          </Grid>
        </Grid>
    </Container>
  );
}

export default Matches;
