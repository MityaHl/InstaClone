import { connect } from 'react-redux';
import { isChangeImageFalse } from '../../../../store/actions/mainValues';
import { changeImage } from '../../../../store/actions/authUser';
import ChangeImage from './ChangeImage';


const mapStateToProps = state => ({
    isChangeImage: state.mainValues.isChangeImage,
    authUser: state.authUser
  });

const mapDispatchToProps =  dispatch => ({
    onChangeImage: () => {        
      dispatch(isChangeImageFalse());
    },
    onPostNewImage: (data)=>{
      dispatch(changeImage(data));
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(ChangeImage);