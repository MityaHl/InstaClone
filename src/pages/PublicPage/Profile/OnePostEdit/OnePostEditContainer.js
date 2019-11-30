import { connect } from 'react-redux';
import { editPostFalse } from '../../../../store/actions/mainValues';
import OnePostEdit from './OnePostEdit';

const mapStateToProps = state => ({
    isEditPost: state.mainValues.isEditPost
  });

const mapDispatchToProps =  dispatch => ({
   postEditFalse: () => {
        dispatch(editPostFalse());
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(OnePostEdit);