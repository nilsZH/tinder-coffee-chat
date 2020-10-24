import React, { useState, setState } from 'react';
import { Container, Grid, Checkbox, Typography, Button, TextField } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import './Profile.css';

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

function postSubmit() {
  //    axios.post("https://cors-anywhere.herokuapp.com/http://3.121.183.48/api/v1/rest-auth/login/", {
  //      username,
  //      password
  //    }).then(result => {
  //      if (result.status !== 200) {
  //        setAuthTokens(result.data);
  //        alert("Changes have been saved!");
  //      } else {
  //        setIsError(true);
  //      }
  //    }).catch(e => {
  //      setIsError(true);
  //    }); 
    }


function Profile() {
  const profile = {
    username: "nils",
    email: "zumhebel.nils@bcgplatinion.com",
    password: "123456",
    role: "Senior Consultant",
    interests: ["golf", "cars"],
    description: "This is me"
  }
  const [user, setUser] = useState(profile);
  const classes = useStyles();

  const handleInterests = (event) => {
    console.log(event)
    if (event.target.checked === "true") {
      let userInterests = [...user.interests].push(event.target.name);
      console.log(userInterests)
      setUser({...user, userInterests});
    } else {
      let userInterests = [...user.interests].pop(event.target.name);
      setUser({...user, userInterests});
    }
    console.log(user);
  };

  function postSubmit() {
    axios.post("http://3.121.183.48/api/v1/rest-auth/login/", {
      user
    }).then(result => {
      if (result.status !== 200) {
        console.log("OK!")
      } else {
        console.log("ERROR!")
      }
    }).catch(e => {
      console.log("ERROR!")
    })
  }

  return (
    <Container className="container" maxWidth="xs">
      <Grid container className={classes.row} spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Profile</Typography>
        </Grid>
      </Grid>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Username" name="username" size="small" variant="outlined" defaultValue={user.username} onChange={e => {
                  setUser({...user, username: e.target.value});
                }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Password" name="password" size="small" type="password" variant="outlined" defaultValue={user.password} onChange={e => {
                  setUser({...user, password: e.target.value});
                }} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Role" name="role" size="small" variant="outlined" defaultValue={user.role} onChange={e => {
                  setUser({...user, username: e.target.value});
                }} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Description" 
                            name="description" size="small" 
                            variant="outlined" defaultValue={user.description} 
                            multiline
                            rows={4} onChange={e => {
                  setUser({...user, username: e.target.value});
                }} />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Interests</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox onChange={handleInterests} name="hiking" />}
                      label="Hiking"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleInterests} name="sailing" />}
                      label="Sailing"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleInterests} name="golf" />}
                      label="Golf"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleInterests} name="cars" />}
                      label="Cars"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button color="secondary" fullWidth variant="contained" onClick={postSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Profile;
