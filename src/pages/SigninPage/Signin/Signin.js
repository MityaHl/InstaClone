import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { css } from 'aphrodite';
import styles from './SignInStyles';


const Signin = () => {

  return (
    <div >
      <Container maxWidth="sm">
          <Grid
            className= { css(styles.grid) }
            container
            direction='column'
            alignItems='center'
            justify="center"
          >
            <Typography variant="h4">
                InstaClone
            </Typography>
            <TextField
                id="outlined-helperText"
                label="Login"
                className= { css(styles.textField) }
                helperText="Enter login"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-helperText"
                label="Password"
                className= { css(styles.textField) }
                type="password"
                helperText="Enter Password"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-helperText"
                label="Confirm password"
                className= { css(styles.textField) }
                type="password"
                helperText="Enter Password again"
                margin="normal"
                variant="outlined"
            />
            <Button variant="contained" color="secondary" className= { css(styles.button) }>
                Enter
            </Button>

            <Link to='/login' className = { css(styles.blackLink) }>
              <Typography >
                LogIn
              </Typography>
            </Link>

         </Grid>
      </Container>
    </div>
  );
}

export default Signin;

