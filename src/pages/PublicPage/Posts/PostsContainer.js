import { connect } from 'react-redux';
import Posts from './Posts';
import { openCreating } from '../../../store/actions/mainValues';

const mapStateToProps = state => ({
    posts: state.posts
  });

const mapDispatchToProps =  dispatch => ({
    onAddPost: () => {
      dispatch(openCreating());
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Posts); 