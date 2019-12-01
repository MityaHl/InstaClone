import { connect } from 'react-redux';
import Header from './Header';
import { isAuthTrue } from '../../../store/actions/mainValues';

const mapStateToProps = state => ({
    authUser: state.authUser
  });

const mapDispatchToProps =  dispatch => ({
    onAuth: () => {
        dispatch( isAuthTrue());
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Header)