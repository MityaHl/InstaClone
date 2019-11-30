import { connect } from 'react-redux';
import { isDeleteTrue } from '../../../store/actions/mainValues';
import Profile from './Profile';

const mapStateToProps = state => ({
    posts: state.posts
  });

const mapDispatchToProps =  dispatch => ({
    onDeleteProfile: () => {
        dispatch(isDeleteTrue());
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Profile);