import { connect } from 'react-redux';
import PostsList from './PostsList';
import { queryPosts } from '../../../../store/actions/posts';
import { isDeletePostTrue } from '../../../../store/actions/mainValues';


const mapStateToProps = state => ({
    posts: state.posts
  });

const mapDispatchToProps =  dispatch => ({
    onQueryPosts: (response) => {
      dispatch(queryPosts(response));
    },
    onDeletePost: () => {
       dispatch(isDeletePostTrue());
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(PostsList);