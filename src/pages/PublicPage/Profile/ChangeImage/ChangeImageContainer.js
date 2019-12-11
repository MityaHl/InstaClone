import { connect } from 'react-redux';
import { isChangeImageFalse } from '../../../../store/actions/mainValues';
import ChangeImage from './ChangeImage';


const mapStateToProps = state => ({
    isChangeImage: state.mainValues.isChangeImage,
    authUser: state.authUser
  });

const mapDispatchToProps =  dispatch => ({
    onChangeImage: () => {
        dispatch(isChangeImageFalse());
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(ChangeImage);