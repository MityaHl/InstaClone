import { connect } from 'react-redux';
import CreatePost from './CreatePost';
import { createPost, closeCreating } from '../../../../store/actions/posts';

const mapStateToProps = state => ({
    isCreate: state.mainValues.isCreate
  });

const mapDispatchToProps = dispatch => ({
    onAddPost: () => {
        dispatch(createPost());
        dispatch(closeCreating());
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
  )(CreatePost)