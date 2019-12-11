import React from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeletePostDialog = ({post, isDeletePost, onDeletePost}) => {

    const deletePost = () => {
        Axios
            .post('http://localhost:8000/deletePost', post)
            .then(onDeletePost)
    };

    return (
        <Dialog open={isDeletePost} aria-labelledby="form-dialog-title" onBackdropClick={onDeletePost}>
            <DialogTitle id="form-dialog-title">Delete post</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Do you really want to delete this post?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button  color="primary" onClick={onDeletePost}>
                    Cancel
                </Button>
                <Button  color="primary" onClick={deletePost}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
  )
    
}

export default DeletePostDialog; 