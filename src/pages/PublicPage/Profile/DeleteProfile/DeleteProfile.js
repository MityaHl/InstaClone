import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Multiselect from 'react-widgets/lib/Multiselect';
import { connect } from 'react-redux';
import { css } from 'aphrodite';


class DeleteProfile extends Component {

    render() {
        return (
            <Dialog open={this.props.state.isDeleteProfile} aria-labelledby="form-dialog-title" onBackdropClick={
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