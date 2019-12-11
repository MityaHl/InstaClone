import { connect } from 'react-redux';
import { addAuthUser } from '../../../store/actions/authUser';
import Login from './Login';

const mapStateToProps = state => ({
    users: state.users
  });

const mapDispatchToProps =  dispatch => ({
    onAuthTrue: (data) => {
        dispatch(addAuthUser(data));
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Login);