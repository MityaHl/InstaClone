import { connect } from 'react-redux';
import Posts from './Posts';

const mapStateToProps = state => ({
    state: state
  });

const mapDispatchToProps =  dispatch => ({
    onAddPost: () => {
      dispatch( {type: 'CHANGE_ISCREATE', payload: true } )
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Posts); 