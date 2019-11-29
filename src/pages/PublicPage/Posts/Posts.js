import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CreatePostContainer from './CreatePost/CreatePostContainer';
import PostContainer from './Post/PostContainer';
import OnePostContainer from './OnePost/OnePostContainer';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './PostsStyles';


class Posts extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isCreate: false,
      isFullPost: false,
      findByUserName: '',
      findByTag: ''
    }
  }

  isFullPost = () => {
    this.setState({
      isFullPost: !this.state.isFullPost
    })
  }

  isCreate = () => {
    this.setState({
      isCreate: !this.state.isCreate
    })
  }

  render() {
    let posts = this.props.state.posts.filter((post) => (
      post.author.includes(this.state.findByUserName)
    )).filter((post) => (
      post.tag.includes(this.state.findByTag)
    ));
    return (
      <div className="App">
        <Container maxWidth="md" className={css(styles.card)}>
  
          <Grid 
            container
            direction="row"
            spacing={3}
          >   
                <Grid item md={9}
                  container
                  direction='column'
                  alignItems='center'
                >
                  
                {
                  posts.map((post, index) => (
                    <PostContainer key={index} postInfo={post.author}/>
                  ))
                }
                  
                </Grid>
                  <Grid item md={3}
                    container
                    direction='column'
                    alignItems='center' 
                  >
                  <div className={css(styles.menuContent)}>
                    <FormControl className={css(styles.card)}>
                      <Typography variant="h5" color="textSecondary" component="h6">
                        Find post by user.
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        value={this.state.findByUserName}
                        onChange={ (event) => {
                            this.setState({
                              findByUserName: event.target.value
                            })
                          }
                        }
                        label="Login"
                        margin="normal"
                        variant="outlined"
                      />
                      <FormHelperText>Find post by user.</FormHelperText>
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
                        value={this.state.findByTag}
                        onChange={ (event) => {
                            this.setState({
                              findByTag: event.target.value
                            })
                          }
                        }
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
          <OnePostContainer/>
          <CreatePostContainer/>
        </Container>
      </div>
    );
  } 
}

export default Posts;
