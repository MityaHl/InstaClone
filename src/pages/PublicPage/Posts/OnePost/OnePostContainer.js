import { connect } from 'react-redux';
import OnePost from './OnePost';

const mapStateToProps = state => ({
    isOpenPost: state.mainValues.isOpenPost
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