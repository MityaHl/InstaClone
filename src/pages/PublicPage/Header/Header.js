import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import InstagramIcon from '@material-ui/icons/Instagram';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom";
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './HeaderStyles';

  class Header extends Component {
    
    render() {
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
                   InstaClone
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
                  this.props.state.mainValues.isAuth ? (
                     <HeaderMenu/>
                  ) : (
                    <div></div>
                  )
                }
               
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
    }
  }

  export default Header;