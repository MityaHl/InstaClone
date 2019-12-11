import React from 'react';
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
import OnePostEditContainer from '../OnePostEdit/OnePostEditContainer';
import { css } from 'aphrodite';
import styles from './ProfilePostStyles';

const ProfilePost = ({isCreate, onEditPost, post}) => { 

  const editPost = () => {
    onEditPost();
  }
  
  return(
       
      <Card className={css(styles.post)}>
        <CardHeader 
          avatar = {<Avatar src="https://gisfit-production.web.app/assets/img/logo.png"/>}
          title = {<Typography>{post.author}</Typography>}
          action={
            <IconButton aria-label="settings" onClick={editPost}>
              <MoreVertIcon />
            </IconButton>
          }
          subheader={post.created_at}
        />
        <CardMedia 
            className={css(styles.media)}
          image={post.image}
          title="Paella dish"
        />
        <CardContent
            className={css(styles.content)}
        >
          <Typography variant="body2" color="textSecondary" component="p">
            {post.content.slice(0,90) + '...'}
          </Typography>
        </CardContent>
        <CardActions>
          <FormControlLabel 
            control={<Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
            label="Like"
          />
        </CardActions>
      </Card>

  )
}

export default ProfilePost;