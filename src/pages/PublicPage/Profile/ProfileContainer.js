import { connect } from 'react-redux';
import { isDeleteTrue } from '../../../store/actions/mainValues';
import { isChangeImageTrue } from '../../../store/actions/mainValues';
import Profile from './Profile';

const mapStateToProps = state => ({
    posts: state.posts,
    authUser: state.authUser,
    changeState: state.mainValues.changeState
  });

const mapDispatchToProps =  dispatch => ({
    onDeleteProfile: () => {
        dispatch(isDeleteTrue());
    },
    onChangeImage: () => {
      dispatch(isChangeImageTrue());
    },
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Profile);