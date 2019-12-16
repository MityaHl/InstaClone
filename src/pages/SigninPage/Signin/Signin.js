import React, { useState } from 'react';
import Axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { css } from 'aphrodite';
import styles from './SignInStyles';


const Signin = () => {

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const regData = {
    login: login,
    email: email, 
    password: password, 
    name: '', 
    surname: '',
    image: 'https://im0-tub-by.yandex.net/i?id=184dbbcdf661ec5a168bc3fd40d38edd&n=13',
    deleted: false,
    admin: false
  }

  const regUser = () => {
    Axios
      .post('http://localhost:8000/addUser', regData)
  }

  return (
    <div>
      <Container>
          <Grid
            className= { css(styles.grid) }
            container
            direction='row'
            alignItems='center'
            justify="center"
            spacing='3'
          > 
            <Grid
              item 
              xs='12'
              container
              direction='column'
              alignItems='center'
            > 
              <Typography variant="h4" >
                lifebook
              </Typography>
            </Grid>
            
            <Grid 
              item 
              xs='6'
              container
              direction='column'
              alignItems='flex-end'
            >
              <TextField
                id="outlined-helperText"
                label="Login"
                value={login}
                onChange={ event => {
                  setLogin(event.target.value);
                }}
                className= { css(styles.textField) }
                helperText="Enter login"
                margin="normal"
                variant="outlined"
              />
              <TextField
                  id="outlined-helperText"
                  label="Email"
                  value={email}
                  onChange={ event => {
                    setEmail((event.target.value));
                  }}
                  className= { css(styles.textField) }
                  helperText="Enter Email"
                  margin="normal"
                  variant="outlined"
              />
            </Grid>
            <Grid 
              item 
              xs='6'
              container
              direction='column'
              alignItems='flex-start'
            >
               <TextField
                  id="outlined-helperText"
                  label="Password"
                  value={password}
                  onChange={ event => {
                    setPassword((event.target.value));
                  }}
                  className= { css(styles.textField) }
                  type="password"
                  helperText="Enter Password"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                    id="outlined-helperText"
                    label="Confirm password"
                    value={passwordConfirm}
                    onChange={ event => {
                      setPasswordConfirm((event.target.value));
                    }}
                    className= { css(styles.textField) }
                    type="password"
                    helperText="Enter Password again"
                    margin="normal"
                    variant="outlined"
                />
            </Grid>   
            <Grid
              item 
              xs='6'
              container
              direction='column'
              alignItems='center'
            > 
              <Button variant="contained" color="secondary" className= { css(styles.button) } onClick={regUser}>
                Sign In
              </Button>

              <Link to='/login' className = { css(styles.blackLink) }>
                <Typography >
                  LogIn
                </Typography>
              </Link>
            </Grid>         

         </Grid>
      </Container>
    </div>
  );
}

export default Signin;

