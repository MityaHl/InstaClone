import { connect } from 'react-redux';
import { isDeleteUserFalse } from '../../../../../store/actions/mainValues';
import { deleteUser } from '../../../../../store/actions/users';

import DeleteUserDialog from './DeleteUserDialog';

const mapStateToProps = state => ({
    isDeleteUser: state.mainValues.isDeleteUser
  });

const mapDispatchToProps =  dispatch => ({
    onDeleteUser: (id) => {
        dispatch(isDeleteUserFalse());
        dispatch(deleteUser(id));
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(DeleteUserDialog);