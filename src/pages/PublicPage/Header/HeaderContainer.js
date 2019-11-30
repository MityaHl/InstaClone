import { connect } from 'react-redux';
import Header from './Header';
import { isAuthTrue } from '../../../store/actions/mainValues';

const mapStateToProps = state => ({
    isAuth: state.mainValues.isAuth
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