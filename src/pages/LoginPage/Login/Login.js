import React, { useState } from 'react';
import Axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { css } from 'aphrodite';
import styles from './LoginStyles';


const Login = ({users , onAuthTrue}) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onAuth = () => {
    Axios
      .post('http://localhost:8000/login', {login: login, password: password})
      .then(
        response => {
          onAuthTrue(response.data)
        }
      )
  }

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
                value={login}
                onChange={ (e) => {
                  setLogin(e.target.value);
                }}
            />
            <TextField
                id="outlined-helperText"
                label="Password"
                type="password"
                className={ css(styles.textField) }
                helperText="Enter Password"
                margin="normal"
                variant="outlined"
                value={password}
                onChange={ (e) => {
                  setPassword(e.target.value);
                }}
            />
            <Button variant="contained" color="secondary" className={ css(styles.button) } onClick={onAuth}>
                Enter
            </Button>

            <Link to='/signin' className={ css(styles.blackLink) }>
              <Typography >
                SignIn
              </Typography>
            </Link>

         </Grid>
      </Container>
    </div>
  );
}

export default Login;

