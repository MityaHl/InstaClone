import { connect } from 'react-redux';
import OnePost from './OnePost';

const mapStateToProps = state => ({
    state: state
  });

const mapDispatchToProps =  dispatch => ({
    onOpenPost: () => {
        dispatch( {type: 'CHANGE_ISOPEN_POST', payload: false } )
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
  )(OnePost)