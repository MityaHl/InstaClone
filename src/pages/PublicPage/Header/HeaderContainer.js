import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
    state: state
  });

const mapDispatchToProps =  dispatch => ({
    onAuth: () => {
        dispatch( {type: 'CHANGE_IS_AUTH', payload: true } )
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Header)