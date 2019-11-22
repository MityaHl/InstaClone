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
import CreatePost from './CreatePost/CreatePost';
import Post from './Post/Post';
import OnePost from './OnePost/OnePost';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './PostsStyles';
import { async } from '../../../store/actions/posts';


class Posts extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isCreate: false,
      isFullPost: false
    }
    this.isFullPost = this.isFullPost.bind(this);
    this.isCreate = this.isCreate.bind(this);
  }

  isFullPost() {
    this.setState({
      isFullPost: !this.state.isFullPost
    })
  }

  isCreate() {
    this.setState({
      isCreate: !this.state.isCreate
    })
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="md" className={css(styles.card)}>
  
          <Grid 
            container
            direction="row"
            spacing={3}
          >   
                <Grid item xs={9}
                  container
                  direction='column'
                  alignItems='center'
                >
                  
                  <Post/>


                  
                </Grid>
                  <Grid item xs={3}
                    container
                    direction='column'
                    alignItems='center' 
                  >
                  <div className={css(styles.menuContent)}>
                    <FormControl className={css(styles.card)}>
                      <Typography variant="h5" color="textSecondary" component="h6">
                        Find user.
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        label="Login"
                        margin="normal"
                        variant="outlined"
                      />
                      <FormHelperText>Find user by login.</FormHelperText>
                    </FormControl>
                    <FormControl className={css(styles.formControl)}>
                      <Typography variant="h5" color="textSecondary" component="h6">
                        Find post.
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        
                        label="Tag"
                        margin="normal"
                        variant="outlined"
                      />
                      <FormHelperText >Find post by tag.</FormHelperText>
                    </FormControl>
                    <div className={css(styles.buttonWrapper)}>
                      <Button variant="contained" color="secondary" className={css(styles.button)} onClick={this.props.onAddPost}>
                        Create Post
                      </Button>
                    </div>
                  </div>  
                </Grid>
          </Grid>
          <OnePost/>
          <CreatePost/>
        </Container>
      </div>
    );
  } 
}

export default connect( 
  state => ({
    state: state
  }),
  dispatch => ({
    onAddPost: () => {
      dispatch( {type: 'CHANGE_ISCREATE', payload: true } )
    },
  })
)(Posts); 
