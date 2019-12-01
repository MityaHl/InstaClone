import { connect } from 'react-redux';
import UsersList from './UsersList';

const mapStateToProps = state => ({
    users: state.users
  });

const mapDispatchToProps =  dispatch => ({

  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(UsersList);