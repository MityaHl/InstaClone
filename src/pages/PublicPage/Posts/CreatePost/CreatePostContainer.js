import { connect } from 'react-redux';
import CreatePost from './CreatePost';
import { closeCreating } from '../../../../store/actions/mainValues';

const mapStateToProps = state => ({
    isCreate: state.mainValues.isCreate,
    author: state.authUser.login
  });

const mapDispatchToProps = dispatch => ({
    onAddPost: () => {
        dispatch(closeCreating());
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
  )(CreatePost)