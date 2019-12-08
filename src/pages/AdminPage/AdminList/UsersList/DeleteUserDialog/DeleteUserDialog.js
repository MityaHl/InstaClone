import React, { Component } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';


const DeleteUserDialog = ({user, isDeleteUser, onDeleteUser}) => {

    const deleteAc = () => {
        Axios
            .post('http://localhost:8000/deleteUser', user)
            .then(onDeleteUser)
    };

    return (
        <Dialog open={isDeleteUser} aria-labelledby="form-dialog-title" onBackdropClick={onDeleteUser}>
            <DialogTitle id="form-dialog-title">Delete user</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Do you really want to delete this user?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button  color="primary" onClick={onDeleteUser}>
                    Cancel
                </Button>
                <Button  color="primary" onClick={deleteAc}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
  )
    
}

export default DeleteUserDialog; 