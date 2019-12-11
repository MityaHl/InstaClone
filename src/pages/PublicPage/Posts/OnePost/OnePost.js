import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import { css } from 'aphrodite';
import styles from './OnePostStyles';


const OnePost = ({post, isOpenPost, onOpenPost}) => {
  
    const openPost = () => {
        onOpenPost();
    }

    return (   
        <Dialog fullWidth={true} open={isOpenPost}  onBackdropClick={openPost}>
            <Container className={css(styles.cardOne)}>
                <Card>
                    <CardHeader 
                        avatar = {<Avatar src="https://gisfit-production.web.app/assets/img/logo.png"/>}
                        title = {<Typography>{post.author}</Typography>}
                        subheader="September 14, 2016"
                    />
                    <CardMedia 
                        image="https://sun9-67.userapi.com/c855336/v855336480/15f3ad/tjtBbYGdwXk.jpg"
                        title="Paella dish"
                        className={css(styles.media)}
                    />
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.content}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <FormControlLabel 
                        control={<Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                        label="Like"
                    />
                    </CardActions>
                </Card>            
            </Container>
        </Dialog>
    )
}

export default OnePost;