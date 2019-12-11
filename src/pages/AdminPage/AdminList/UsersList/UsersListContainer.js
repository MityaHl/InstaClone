import { connect } from 'react-redux';
import UsersList from './UsersList';
import { queryUsers } from '../../../../store/actions/users';
import { isDeleteUserTrue } from '../../../../store/actions/mainValues';


const mapStateToProps = state => ({
    users: state.users, 
    authUser: state.authUser
  });

const mapDispatchToProps =  dispatch => ({
    onQueryUsers: (response) => {
      dispatch(queryUsers(response));
    },
    onDeleteUser: () => {
        dispatch(isDeleteUserTrue());
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(UsersList);