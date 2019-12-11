import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";
import { css } from 'aphrodite';
import styles from './HeaderMenuStyles'

const HeaderMenu = ({authUser}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = event => {
            setAnchorEl(event.currentTarget);
        };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick} className={ css(styles.link) }>
                <Typography className="accountCircle">
                    {authUser.login}
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
                {
                    !authUser.admin && (
                        <MenuItem onClick={handleClose} className={css(styles.menuItem)}>
                            <PersonIcon className={ css(styles.icon) } fontSize="small" />
                            <Link to='/profile' className={ css(styles.blackLink)} >
                                <Typography >  
                                    My account
                                </Typography>
                            </Link>
                        </MenuItem>
                    ) 
                }
                
                <MenuItem onClick={handleClose} className={css(styles.menuItem)}>
                    <ExitToAppIcon className={ css(styles.icon) } fontSize="small" />
                    <Link to='/logout' className={ css(styles.blackLink) }>
                    <Typography>
                        LogOut
                    </Typography>
                    </Link>
                </MenuItem>
            </Menu>
        </div>
        
    )
}
export default HeaderMenu;