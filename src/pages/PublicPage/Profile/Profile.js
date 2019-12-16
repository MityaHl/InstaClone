import React, { useState } from 'react';
import Axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProfilePostContainer from './ProfilePost/ProfilePostContainer';
import DeleteProfileContainer from './DeleteProfile/DeleteProfileContainer';
import OnePostEditContainer from './OnePostEdit/OnePostEditContainer';
import ChangeImageContainer from './ChangeImage/ChangeImageContainer';
import { css } from 'aphrodite';
import styles from './ProfileStyles';


const Profile = ({posts, authUser, changeState, onDeleteProfile, onChangeImage, onChangeState, onQueryPosts}) => {


  const deleteProfile = () => {
    onDeleteProfile();
  }

  const [editPostData, setEditPostData] = useState({});
  
  const openEditPostDialog = (post) => {
    setEditPostData(post);
  }

  const closeEditPostDialog = () => {
     Axios
      .get('http://localhost:8000/posts')
      .then(response => {
          onQueryPosts(response.data);
          setEditPostData({});
      })
  }
      
  return (
    <div>
      <Container className={css(styles.profileWrapper)}>
        <Grid
          container
          direction="row"
          spacing={3}
        >
          <Grid item xs={5} className={css(styles.avatarWrapper)}>
            <Avatar src={authUser.image} className={css(styles.avatar)} onClick={onChangeImage}/>
          </Grid>
          <Grid item xs={7} className={css(styles.infoWrapper)}>
          
            <div className={css(styles.profileName)}>
              <Typography className={css(styles.nickName)}>
                {authUser.login}
              </Typography>
              <Button variant="outlined" color="secondary" onClick={deleteProfile} className={css(styles.deleteButton)}>
                Delete profile
              </Button>
            </div>
            <div className={css(styles.changeInfoWrapper)}>
              <TextField
                id="outlined-helperText"
                label="Name"
                defaultValue={authUser.name}
                onBlur={
                  (event) => {
                    Axios
                      .post('http://localhost:8000/editName', {name: event.target.value, id: authUser.id})
                  }
                }
                className={css(styles.textField)}
                margin="normal"  
                variant="outlined"
              />
              <TextField
                id="outlined-helperText"
                label="Surname"
                defaultValue={authUser.surname}
                onBlur={
                  (event) => {
                    Axios
                      .post('http://localhost:8000/editSurname', {surname: event.target.value, id: authUser.id})
                  }
                }
                className={css(styles.textField)}
                margin="normal"
                variant="outlined"
              />
            </div>
          </Grid>
        </Grid>
        <Typography variant="h4" className={css(styles.postTitle)}>
          Publications
        </Typography>
        <Grid
          container
          direction="row"
          spacing={3}
        >
          {
            posts.map((post, index) => (
                post.author === authUser.login ? (
                  <Grid item md={4} sm={6} xs={12}>
                    <ProfilePostContainer key={post.id} authUser={authUser} post={post} openEditPostDialog={openEditPostDialog}/>
                  </Grid>
                ) : ('')
            ))
          }
        </Grid>
      </Container>
       <DeleteProfileContainer/>
       <ChangeImageContainer/>
       {
         editPostData.title && (<OnePostEditContainer editPostData={editPostData} closeEditPostDialog={closeEditPostDialog}/>)
       }
    </div>
  );
}

export default Profile;

