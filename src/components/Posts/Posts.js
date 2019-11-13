import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {Link} from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';


const useStyles = makeStyles(theme => ({
    media: {
      height: 10,
      paddingTop: '56.25%', 
    },
    like: {
      marginLeft: '10px'
    },
    card: {
      width: '100%',
      marginTop: '15px',

    },
    link: {
      textDecoration: 'none',
      underLine: 'none',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    menuContent: {
      display: 'flex',
      position: 'fixed',
      flexDirection: 'column',
      alignItems: 'center'
    }
}));

function Posts () {
  const classes = useStyles();
  let bool = false;
  return (
    <div className="App">
      <Container maxWidth="md" className={classes.card}>

        <Grid 
          container
          direction="row"
          spacing={3}
        >
            
              <Grid item xs={9}
                container
                direction='column'
                alignItems='center'
              >
                <Card className="card">
                  <CardHeader 
                    avatar = {<Avatar src="https://gisfit-production.web.app/assets/img/logo.png"/>}
                    title = {<Typography>Title</Typography>}
                    action={
                      
                        <IconButton aria-label="settings">
                          <KeyboardArrowRightIcon 
                           className={classes.link}/>
                        </IconButton>
                      
                    }
                    subheader="September 14, 2016"
                  />
                  <CardMedia 
                    className={classes.media}
                    image="https://sun9-67.userapi.com/c855336/v855336480/15f3ad/tjtBbYGdwXk.jpg"
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Matteo Guendouzi has become a firm fan favourite for his passion and never-say-die spirit on the pitch.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <FormControlLabel 
                      control={<Checkbox className={classes.like} icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                      label="Like"
                    />
                  </CardActions>
                </Card>
                <Card className={classes.card}>
                  <CardHeader 
                    avatar = {<Avatar src="https://gisfit-production.web.app/assets/img/logo.png"/>}
                    title = {<Typography>Title</Typography>}
                    action={
                        <Link to={'/post/' + 3}  >
                          <IconButton aria-label="settings">
                            <KeyboardArrowRightIcon className={classes.link}/>
                          </IconButton>
                        </Link>  
                    }
                    subheader="September 14, 2016"
                  />
                  <CardMedia 
                    className={classes.media}
                    image="https://sun9-67.userapi.com/c855336/v855336480/15f3ad/tjtBbYGdwXk.jpg"
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Matteo Guendouzi has become a firm fan favourite for his passion and never-say-die spirit on the pitch.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <FormControlLabel 
                      control={<Checkbox className={classes.like} icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                      label="Like"
                    />
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}
                container
                direction='column'
                alignItems='center'
                
              >
                <div className={classes.menuContent}>
                  <FormControl className={classes.card}>
                    <Typography variant="h5" color="textSecondary" component="h6">
                      Find user.
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      
                      label="Login"
                      margin="normal"
                      variant="outlined"
                    />
                    <FormHelperText>Find user by login.</FormHelperText>
                  </FormControl>
                  <FormControl className={classes.card}>
                    <Typography variant="h5" color="textSecondary" component="h6">
                      Find post.
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      
                      label="Tag"
                      margin="normal"
                      variant="outlined"
                    />
                    <FormHelperText >Find post by tag.</FormHelperText>
                  </FormControl>
                </div>
                   
              </Grid>
        </Grid>

      </Container>
    </div>
  );
  
}

export default Posts
