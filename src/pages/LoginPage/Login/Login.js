import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './LoginStyles';


class Login extends Component {

constructor(props) {
  super(props);
}

render() {
  return (
    <div >
      <Container maxWidth="sm">
          <Grid
            className={ css(styles.grid) }
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
                className={ css(styles.textField) }
                helperText="Enter login"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-helperText"
                label="Password"
                type="password"
                className={ css(styles.textField) }
                helperText="Enter Password"
                margin="normal"
                variant="outlined"
            />
            <Button variant="contained" color="secondary" className={ css(styles.button) } onClick={this.props.onAuth}>
                Enter
            </Button>

            <Link to='/signin' >
              <Typography className={ css(styles.blackLink) }>
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

