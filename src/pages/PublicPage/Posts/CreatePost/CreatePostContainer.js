import { connect } from 'react-redux';
import CreatePost from './CreatePost';
import { createPost } from '../../../../store/actions/posts';
import { closeCreating } from '../../../../store/actions/mainValues';

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