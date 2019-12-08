import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { css } from 'aphrodite';
import styles from './PostStyles';

const Post = ({state, onOpenPost, post}) => {

  const openPost = () => {
    onOpenPost();
  }

  return(
    <Card className={css(styles.card)}>
        <CardHeader 
            avatar = {<Avatar src="https://gisfit-production.web.app/assets/img/logo.png"/>}
            title = {<Typography>{post.author}</Typography>}
            action={
                <IconButton  onClick={openPost}>
                <KeyboardArrowRightIcon/>
                </IconButton>
            }
            subheader={post.created_at}
        />
        <CardMedia 
            className={css(styles.media)}
            image="https://sun9-67.userapi.com/c855336/v855336480/15f3ad/tjtBbYGdwXk.jpg"
            title="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.content}
            </Typography>
        </CardContent>
        <CardActions>
            <FormControlLabel 
            control={<Checkbox className={css(styles.like)} icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
            label="Like"
            />
        </CardActions>
    </Card>
  )
}

export default Post; 