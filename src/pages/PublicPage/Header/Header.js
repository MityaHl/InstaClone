import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import InstagramIcon from '@material-ui/icons/Instagram';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom";
import HeaderMenuContainer from './HeaderMenu/HeaderMenuContainer';
import { css } from 'aphrodite';
import styles from './HeaderStyles';

  const Header = ({authUser, onAuth}) => {

      return (
      <AppBar position="sticky" className={ css(styles.header) }>
        <Container maxWidth="lg">
          <Toolbar>
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid 
                item 
                xs={10} 
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <InstagramIcon className={ css(styles.logo) }/>
                <Typography variant="h6">
                  <Link to='/'  className={ css(styles.link) }>
                   lifebook
                  </Link>
                </Typography>
              </Grid>
              <Grid 
                item
                xs={2}
                container
                direction="row"
                justify="center"
              >
                {
                  authUser.login ? (
                     <HeaderMenuContainer/>
                  ) : (
                    <div/>
                  )
                }
               
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  export default Header;