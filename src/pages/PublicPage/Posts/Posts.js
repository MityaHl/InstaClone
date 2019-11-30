import React, { useState } from 'react';
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


const Posts = ({posts, onAddPost}) => {

  const [findByUserName, setFindByUserName] = useState('');
  const [findByTag, setFindByTag] = useState('');

  const addPost = () => {
    onAddPost();
  };

  let sortPosts = posts.filter((post) => (
    post.author.includes(findByUserName)
  )).filter((post) => (
    post.tag.includes(findByTag)
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
                sortPosts.map((post, index) => (
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
                      value={findByUserName}
                      onChange={ (event) => {
                            setFindByUserName(event.target.value); 
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
                      value={findByTag}
                      onChange={ (event) => {
                          setFindByTag(event.target.value); 
                        }
                      }
                    />
                    <FormHelperText >Find post by tag.</FormHelperText>
                  </FormControl>
                  <div className={css(styles.buttonWrapper)}>
                    <Button variant="contained" color="secondary" className={css(styles.button)} onClick={addPost}>
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

export default Posts;
