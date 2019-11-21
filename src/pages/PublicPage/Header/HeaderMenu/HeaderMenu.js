import React, { Component } from 'react';
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
import { connect } from 'react-redux';

const HeaderMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = event => {
        setAnchorEl(event.currentTarget);
        };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick} className="link">
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
                    <PersonIcon className='icon' fontSize="small" />
                    <Link to='/profile'>
                    <Typography className='black-link'>  
                        My account
                    </Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ExitToAppIcon className='icon' fontSize="small" />
                    <Link to='/logout' >
                    <Typography className='black-link'>
                        LogOut
                    </Typography>
                    </Link>
                </MenuItem>
            </Menu>
        </div>
        
    )
}
export default HeaderMenu;