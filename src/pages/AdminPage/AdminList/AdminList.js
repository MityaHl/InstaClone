import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {Link} from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import UsersList from './UsersList/UsersList';
import PostsList from './PostsList/PostsList';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import { css } from 'aphrodite';
import styles from './AdminListStyles';


class AdminList extends Component {

constructor(props) {
  super(props);
  this.state = {
      pageContent: false
  }
}


render() {
    return (
      <Container maxWidth="md">
        <Paper className={ css(styles.paper) }>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
                variant="fullWidth"
            >
                <Tab 
                selected
                    label="Users" 
                    className={ css(styles.tab) }
                    onClick={() => {
                        this.setState({
                            pageContent: false
                        })
                    }}
                />
                <Tab 
                    label="Posts" 
                    className={ css(styles.tab) }
                    onClick={() => {
                        this.setState({
                            pageContent: true
                        })
                    }}
                />
            </Tabs>
        </Paper>
        <Paper>
            {
                !this.state.pageContent ? (
                    <UsersList/>
                ) : (
                    <PostsList/>
                )
            }
        </Paper>
      </Container>
        
    );
}

}

export default connect( 
  state => ({
    state: state
  }),
  dispatch => ({

  })
)(AdminList); 
