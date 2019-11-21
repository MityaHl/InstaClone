import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import styles from './Login.module.css';

const useStyles = makeStyles(theme => ({
  grid: {
      height: "70vh"
  },
  textField: {
      width: '60%',
      marginTop: '30px'
  },
  button: {
    backgroundColor: '#ec407a',
    marginTop: '30px',
    width: '30%',
  },
  formWrapper: {
      border: '2px solid black'
  }
}));

class Login extends Component {

constructor(props) {
  super(props);
}

render() {
  return (
    <div >
      <Container maxWidth="sm">
          <Grid
            className='grid'
            container
            direction='column'
            alignItems='center'
            justify="center"
          >
            <Typography variant="h4" >
                InstaClone
            </Typography>
            <TextField
                id="outlined-helperText"
                label="Login"
                className='textFields'
                helperText="Enter login"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-helperText"
                label="Password"
                type="password"
                helperText="Enter Password"
                margin="normal"
                variant="outlined"
            />
            <Button variant="contained" color="secondary" className="button-login" onClick={this.props.onAuth}>
                Enter
            </Button>

            <Link to='/signin' >
              <Typography className='black-link' style={{ marginTop: '20px' }}>
                SignIn
              </Typography>
            </Link>

         </Grid>
      </Container>
    </div>
  );
}

}

export default connect( 
  state => ({
    state: state
  }),
  dispatch => ({
    onAuth: () => {
        dispatch( {type: 'CHANGE_IS_AUTH', payload: true } )
      }
  })
)(Login)

