import { connect } from 'react-redux';
import { isDeleteTrue } from '../../../store/actions/mainValues';
import { isChangeImageTrue } from '../../../store/actions/mainValues';
import { queryPosts } from '../../../store/actions/posts';
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
    onQueryPosts: (response) => {
      dispatch(queryPosts(response));
    },
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Profile);