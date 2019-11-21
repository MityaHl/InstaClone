import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import purple from '@material-ui/core/colors/purple';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";

import './AdminHeader';

 function AdminHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <AppBar position="sticky" className='header'>
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
                justify="center"
                alignItems="center"
              >
                <InstagramIcon className='logo'/>
                <Typography className='title' variant="h6">
                  <Link to='/admin'  className='link'>
                    AdminPage
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
                <Link  to='/login' className='link'>
                    <Typography>
                        LogOut
                    </Typography>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  export default AdminHeader