import React, { Component } from 'react';
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
import './Matches.css';

function createData(id, lastname, firstname, link) {
  return { id, lastname, firstname, link };
}

const rows = [
  createData(1, 'zum Hebel', 'Nils', <a href="slack://user?team=TBL550SUB\&id=DDN0JAY79"><ChatIcon /></a>),
  createData(2, 'Haas', 'Anke', <a href="slack://user?team=TBL550SUB\&id=D01CTNJ2CK1"><ChatIcon /></a>)
];

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
  const classes = useStyles();

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
                  <TableCell>Lastname</TableCell>
                  <TableCell >Firstname</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.lastname}
                    </TableCell>
                    <TableCell>{row.firstname}</TableCell>
                    <TableCell>{row.link}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Grid>
        </Grid>
    </Container>
  );
}

export default Matches;
