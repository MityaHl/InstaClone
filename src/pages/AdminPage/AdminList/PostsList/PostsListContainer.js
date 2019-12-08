import { connect } from 'react-redux';
import PostsList from './PostsList';
import { queryPosts } from '../../../../store/actions/posts';


const mapStateToProps = state => ({
    posts: state.posts
  });

const mapDispatchToProps =  dispatch => ({
    onQueryPosts: (response) => {
      dispatch(queryPosts(response));
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(PostsList);