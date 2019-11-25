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
import { css } from 'aphrodite';
import styles from '../ProfileStyles';

class ProfilePost extends Component {
    constructor(props) {
        super(props);
    }


    render() {
      console.log(this.props);
        return(
            <Grid item xs={4}>
            <Card >
              <CardHeader 
                avatar = {<Avatar src="https://gisfit-production.web.app/assets/img/logo.png"/>}
                title = {<Typography>{this.props.postInfo}</Typography>}
                action={
                  <IconButton aria-label="settings">
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

}

export default ProfilePost;