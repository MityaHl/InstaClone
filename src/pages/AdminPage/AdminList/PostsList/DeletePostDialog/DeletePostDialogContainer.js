import { connect } from 'react-redux';
import { isDeletePostFalse } from '../../../../../store/actions/mainValues';
import DeletePostDialog from './DeletePostDialog';

const mapStateToProps = state => ({
    isDeletePost: state.mainValues.isDeletePost
  });

const mapDispatchToProps =  dispatch => ({
    onDeletePost: () => {
        dispatch(isDeletePostFalse());
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(DeletePostDialog);