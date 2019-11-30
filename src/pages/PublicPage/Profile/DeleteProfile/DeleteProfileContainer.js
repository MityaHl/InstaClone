import { connect } from 'react-redux';
import { isDeleteFalse } from '../../../../store/actions/mainValues';
import DeleteProfile from './DeleteProfile';

const mapStateToProps = state => ({
    isDeleteProfile: state.mainValues.isDeleteProfile
  });

const mapDispatchToProps =  dispatch => ({
    onDeleteProfile: () => {
        dispatch(isDeleteFalse());
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(DeleteProfile);