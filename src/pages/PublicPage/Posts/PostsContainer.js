import { connect } from 'react-redux';
import Posts from './Posts';
import { openCreating } from '../../../store/actions/mainValues';
import { queryPosts } from '../../../store/actions/posts';

const mapStateToProps = state => ({
    posts: state.posts
  });

const mapDispatchToProps =  dispatch => ({
    onAddPost: () => {
      dispatch(openCreating());
    },
    onQueryPosts: (response) => {
      dispatch(queryPosts(response));
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Posts); 