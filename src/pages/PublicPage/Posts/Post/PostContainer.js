import { connect } from 'react-redux';
import { openPost } from '../../../../store/actions/mainValues';
import Post from './Post';

const mapStateToProps = state => ({
  });

const mapDispatchToProps =  dispatch => ({
    onOpenPost: () => {
        dispatch( openPost() );
      }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Post);