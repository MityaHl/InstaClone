import { connect } from 'react-redux';
import AdminList from './AdminList';

const mapStateToProps = state => ({
    state: state
  });

const mapDispatchToProps =  dispatch => ({
  
});

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(AdminList);