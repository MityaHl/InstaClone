import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu';

const mapStateToProps = state => ({
    authUser: state.authUser
  });

const mapDispatchToProps =  dispatch => ({
    
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(HeaderMenu);