import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ProfilePost from './ProfilePost/ProfilePost';
import Box from '@material-ui/core/Box';
import DeleteProfile from './DeleteProfile/DeleteProfile';
import { css } from 'aphrodite';
import styles from './ProfileStyles';
import { connect } from 'react-redux';




class Profile extends Component {


render() {
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
              <Button variant="outlined" color="secondary" onClick={this.props.onDeleteProfile} className={css(styles.deleteButton)}>
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
            this.props.state.posts.map((post, index) => (
              <ProfilePost key={index} postInfo={post.author}/>
            ))
          }
        </Grid>
      </Container>
       <DeleteProfile/>
    </div>
  );
}
  
}

export default connect( 
  state => ({
    state: state
  }),
  dispatch => ({
    onDeleteProfile: () => {
        dispatch( {type: 'CHANGE_IS_DELETE_PROFILE', payload: true } )
      }
  })
)(Profile); 

