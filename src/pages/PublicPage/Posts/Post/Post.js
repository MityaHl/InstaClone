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
import { connect } from 'react-redux';
import './Post.scss'

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isCreate: false,
          isFullPost: false
        }
        this.isFullPost = this.isFullPost.bind(this);
        this.isCreate = this.isCreate.bind(this);
      }
    
      isFullPost() {
        this.setState({
          isFullPost: !this.state.isFullPost
        })
      }
    
      isCreate() {
        this.setState({
          isCreate: !this.state.isCreate
        })
      }

    render(){
        return(
            <Card className="card">
                <CardHeader 
                    avatar = {<Avatar src="https://gisfit-production.web.app/assets/img/logo.png"/>}
                    title = {<Typography>Author</Typography>}
                    action={
                    
                        <IconButton  onClick={this.props.onOpenPost}>
                        <KeyboardArrowRightIcon/>
                        </IconButton>
                    
                    }
                    subheader="September 14, 2016"
                />
                <CardMedia 
                    className='media'
                    image="https://sun9-67.userapi.com/c855336/v855336480/15f3ad/tjtBbYGdwXk.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      We return to Premier League action on Saturday afternoon, when Southampton visit Emirates Stadium.
                    </Typography>
                </CardContent>
                <CardActions>
                    <FormControlLabel 
                    control={<Checkbox className='like' icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                    label="Like"
                    />
                </CardActions>
            </Card>
        )
    }
}

export default connect( 
  state => ({
    state: state
  }),
  dispatch => ({
    onOpenPost: () => {
        dispatch( {type: 'CHANGE_ISOPEN_POST', payload: true } )
      }
  })
)(Post); 