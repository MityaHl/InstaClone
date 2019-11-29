import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';


class DeleteProfile extends Component {

    render() {
        return (
            <Dialog open={this.props.state.mainValues.isDeleteProfile} aria-labelledby="form-dialog-title" onBackdropClick={
              this.props.onDeleteProfile
          }>
            <DialogTitle id="form-dialog-title">Delete profile</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Do you really want to delete your profile?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button  color="primary">
                    Cancel
                </Button>
                <Button  color="primary">
                    Delete
                </Button>
            </DialogActions>
      </Dialog>
        )
    }
}

export default connect( 
    state => ({
      state: state
    }),
    dispatch => ({
      onDeleteProfile: () => {
        dispatch( {type: 'CHANGE_IS_DELETE_PROFILE', payload: false } )
      }
    })
  )(DeleteProfile)