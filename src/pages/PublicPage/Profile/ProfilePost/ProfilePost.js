import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
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
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import styles from '../ProfileStyles';

const ProfilePost = ({postInfo, isCreate, onEditPost}) => { 

  const editPost = () => {
    onEditPost();
  }

  return(
      <Grid item md={4} sm={6} xs={12}>
      <Card >
        <CardHeader 
          avatar = {<Avatar src="https://gisfit-production.web.app/assets/img/logo.png"/>}
          title = {<Typography>{postInfo}</Typography>}
          action={
            <IconButton aria-label="settings" onClick={editPost}>
              <MoreVertIcon />
            </IconButton>
          }
          subheader="September 14, 2016"
        />
        <CardMedia 
            className={css(styles.media)}
          image="https://sun9-67.userapi.com/c855336/v855336480/15f3ad/tjtBbYGdwXk.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Контент.
          </Typography>
        </CardContent>
        <CardActions>
          <FormControlLabel 
            control={<Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
            label="Like"
          />
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProfilePost;