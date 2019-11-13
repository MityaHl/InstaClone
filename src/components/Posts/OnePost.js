import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';

import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: '20px'
    },
    media: {
        height: 10,
        paddingTop: '56.25%', 
      },
}));

  
class OnePost extends Component {

constructor(props) {
    super(props);
    this.state = {
        isOpen: false,
        useStyles: makeStyles(theme => ({
            card: {
                marginTop: '20px'
            },
            media: {
                height: 10,
                paddingTop: '56.25%', 
            },
            but: {
                marginTop: '100px'
            }
        }))
    }
}
  
render() {
    let a = this.state.useStyles();
    return (
        <div >
          <Container maxWidth="md">
    
          <Button variant="outlined" color="primary" className={a.but}  onClick={ () => {
              this.setState({
                  isOpen: !this.state.isOpen
              })
          }}>
            Open simple dialog
          </Button>
          
          <Dialog title='vervev'  open={this.state.isOpen}  onBackdropClick={() => {
              this.setState({
                  isOpen: !this.state.isOpen
              })}
          }>
              <Container minWidth='md'>
              <Card
              style={{ width: '70vh', marginTop: '30px', marginBottom: '30px' }}>
                <CardHeader 
                avatar = {<Avatar src="https://gisfit-production.web.app/assets/img/logo.png"/>}
                title = {<Typography>Title</Typography>}
                
                subheader="September 14, 2016"
                />
                <CardMedia 
                style={{ height: '40vh' }}
                
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
              </Container>
            
          </Dialog>
        
            
          </Container>
        </div>
      );
}

  
  
}

export default OnePost