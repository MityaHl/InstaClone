import { connect } from 'react-redux';
import ProfilePost from './ProfilePost';
import { editPostTrue } from '../../../../store/actions/mainValues';

const mapStateToProps = state => ({
    isCreate: state.mainValues.isCreate
  });

const mapDispatchToProps = dispatch => ({
    onEditPost: () => {
        dispatch(editPostTrue());
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
  )(ProfilePost)