import { connect } from 'react-redux';
import { isDeletePostFalse } from '../../../../../store/actions/mainValues';
import { deletePosts } from '../../../../../store/actions/posts';
import DeletePostDialog from './DeletePostDialog';


const mapStateToProps = state => ({
    isDeletePost: state.mainValues.isDeletePost
  });

const mapDispatchToProps =  dispatch => ({
    onDeletePost: (id) => {
        dispatch(isDeletePostFalse());
        dispatch(deletePosts(id));
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(DeletePostDialog);