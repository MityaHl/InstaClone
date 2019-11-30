import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';


const DeleteProfile = ({isDeleteProfile, onDeleteProfile}) => {

  return (
      <Dialog open={isDeleteProfile} aria-labelledby="form-dialog-title" onBackdropClick={onDeleteProfile}>
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

export default DeleteProfile;