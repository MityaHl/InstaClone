import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  grid: {
      height: "80vh"
  },
  textField: {
      width: '60%',
      marginTop: '20px'
  },
  button: {
    backgroundColor: '#ec407a',
    marginTop: '20px',
    width: '30%',
  },
  formWrapper: {
      border: '2px solid black',
  }, 
  typography: {
      marginTop: '20px'
  }
}));

export default function Signin () {

  const classes = useStyles();

  return (
    <div >
      <Container maxWidth="sm">
          <Grid
            className={classes.grid}
            container
            direction='column'
            alignItems='center'
            justify="center"
          >
            <Typography variant="h4" className={classes.typography}>
                InstaClone
            </Typography>
            <TextField
                id="outlined-helperText"
                label="Login"
                className={classes.textField}
                helperText="Enter login"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-helperText"
                label="Password"
                className={classes.textField}
                type="password"
                helperText="Enter Password"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-helperText"
                label="Confirm password"
                className={classes.textField}
                type="password"
                helperText="Enter Password again"
                margin="normal"
                variant="outlined"
            />
            <Button variant="contained" color="secondary" className={classes.button}>
                Enter
            </Button>
         </Grid>
      </Container>
    </div>
  );
}

