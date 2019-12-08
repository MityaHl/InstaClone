import { connect } from 'react-redux';
import { isDeleteUserFalse } from '../../../../../store/actions/mainValues';
import DeleteUserDialog from './DeleteUserDialog';

const mapStateToProps = state => ({
    isDeleteUser: state.mainValues.isDeleteUser
  });

const mapDispatchToProps =  dispatch => ({
    onDeleteUser: () => {
        dispatch(isDeleteUserFalse());
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(DeleteUserDialog);