import { connect } from 'react-redux';
import { editPostFalse } from '../../../../store/actions/mainValues';
import { queryPosts } from '../../../../store/actions/posts';

import OnePostEdit from './OnePostEdit';

const mapStateToProps = state => ({
    isEditPost: state.mainValues.isEditPost
  });

const mapDispatchToProps =  dispatch => ({
   postEditFalse: () => {
        dispatch(editPostFalse());
    },
    onQueryPosts: (response) => {
      dispatch(queryPosts(response));
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(OnePostEdit);