import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProfilePostContainer from './ProfilePost/ProfilePostContainer';
import DeleteProfileContainer from './DeleteProfile/DeleteProfileContainer';
import OnePostEditContainer from './OnePostEdit/OnePostEditContainer';
import { css } from 'aphrodite';
import styles from './ProfileStyles';
import { connect } from 'react-redux';


const Profile = ({posts, onDeleteProfile}) => {

  const deleteProfile = () => {
    onDeleteProfile();
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
            <Avatar alt="Polina" src="https://sun9-3.userapi.com/c841624/v841624870/42022/gliwAEljN4w.jpg" className={css(styles.avatar)} />
          </Grid>
          <Grid item xs={7} className={css(styles.infoWrapper)}>
          
            <div className={css(styles.profileName)}>
              <Typography className={css(styles.nickName)}>
                p.trava
              </Typography>
              <Button variant="outlined" color="secondary" onClick={deleteProfile} className={css(styles.deleteButton)}>
                Delete profile
              </Button>
            </div>
            <div className={css(styles.changeInfoWrapper)}>
              <TextField
                id="outlined-helperText"
                label="Name"
                defaultValue="Polina"
                className={css(styles.textField)}
                margin="normal"  
                variant="outlined"
              />
              <TextField
                id="outlined-helperText"
                label="Surname"
                defaultValue="Khlopyanikova"
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
              <ProfilePostContainer key={index} postInfo={post.author}/>
            ))
          }
        </Grid>
      </Container>
       <DeleteProfileContainer/>
       <OnePostEditContainer/>
    </div>
  );
}

export default Profile;

