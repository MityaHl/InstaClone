import { connect } from 'react-redux';
import PostsList from './PostsList';

const mapStateToProps = state => ({
    posts: state.posts
  });

const mapDispatchToProps =  dispatch => ({

  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(PostsList);