import { connect } from 'react-redux';
import { isAuthTrue } from '../../../store/actions/mainValues';
import Login from './Login';

const mapStateToProps = state => ({
    state: state
  });

const mapDispatchToProps =  dispatch => ({
    onAuthTrue: () => {
        dispatch(isAuthTrue());
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Login);