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

const useStyles = makeStyles(theme => ({
  root: {
    background: purple['A200']
  },
  logo: {
    margin: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#ec407a'
  },
  icon: {
    marginRight: '5px'
  },
  link: {
    textDecoration: 'none',
    underLine: 'none',
    color: '#fff'
  },
  blackLink: {
    textDecoration: 'none',
    underLine: 'none',
    color: 'black'
  }
}));

  export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <AppBar position="sticky" className={classes.header}>
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
                <InstagramIcon className={classes.logo}/>
                <Typography className={classes.title} variant="h6">
                  <Link to='/'  className={classes.link}>
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
                <IconButton onClick={handleClick}>
                  <Typography className="accountCircle">
                    Mitya
                  </Typography>
                  <AccountCircle className="accountCircle" />
                </IconButton>
                <Menu 
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <PersonIcon className={classes.icon} fontSize="small" />
                      <Link to='/profile' className={classes.blackLink}>
                        My account
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ExitToAppIcon className={classes.icon} fontSize="small" />
                      <Link to='/login' className={classes.blackLink}>
                        LogOut
                      </Link>
                    </MenuItem>
                  </Menu>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }