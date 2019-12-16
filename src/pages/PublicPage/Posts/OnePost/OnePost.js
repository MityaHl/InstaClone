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


const OnePost = ({post , openPostData, closePostDialog, isOpenPost, onOpenPost}) => {
  
    const openPost = () => {
        onOpenPost();
    }
    console.log('dverv',post);
    return (   
        <Dialog fullWidth={true} open={openPostData.title} aria-labelledby="simple-dialog-title" onBackdropClick={closePostDialog}>
            <Container className={css(styles.cardOne)}>
                <Card>
                    <CardHeader 
                        avatar = {<Avatar src={openPostData.photo}/>}
                        title = {<Typography>{openPostData.author}</Typography>}
                        subheader="September 14, 2016"
                    />
                    <CardMedia 
                        image={openPostData.image}
                        title="Paella dish"
                        className={css(styles.media)}
                    />
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {openPostData.content}
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