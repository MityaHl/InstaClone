import React from 'react';
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
import OnePostContainer from '../OnePost/OnePostContainer';
import { css } from 'aphrodite';
import styles from './PostStyles';

const Post = ({ onOpenPost, post, openPostDialog}) => {

  const openPost = () => {
    openPostDialog(post);
  }

  return(
    <Card className={css(styles.card)}>
        <CardHeader 
            avatar = {<Avatar src={post.photo}/>}
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
            image={post.image}
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