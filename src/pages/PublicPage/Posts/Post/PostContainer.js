import { connect } from 'react-redux';
import Post from './Post';

const mapStateToProps = state => ({
    state: state
  });

const mapDispatchToProps =  dispatch => ({
    onOpenPost: () => {
        dispatch( {type: 'CHANGE_ISOPEN_POST', payload: true } )
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Post);