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


const OnePostEdit = ({isEditPost, postEditFalse}) => {

    const editPostFalse = () => {
        postEditFalse();
    }

    return (
        <Dialog open={isEditPost} onBackdropClick={editPostFalse}>>  
            <DialogTitle id="form-dialog-title">Edit post</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To edit a post, please, change title, upload new image and write new description here or you can change some tags.
                </DialogContentText>
                <Typography variant="h6">
                    Title
                </Typography>
                <FormGroup>
                    <TextField
                    id="outlined-search"
                    label="Title"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    />
                    <Typography variant="h6">
                        Image
                    </Typography>
                    <input
                        style={{ display: 'none' }}
                        accept="image/*"
                        id="outlined-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="outlined-button-file">
                        <Button variant="outlined" component="span">
                            Upload
                        </Button>
                    </label>
                    <Typography variant="h6">
                        Content
                    </Typography>
                    <TextField
                        id="outlined-search"
                        label="Content"
                        type="text"
                        multiline={true}
                        rows='5'
                        margin="normal"
                        variant="outlined"
                    />
                    <Typography variant="h6">
                        Tags
                    </Typography>
                    <Multiselect
                        dropUp
                        data={["orange", "blue"]}
                    />
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button  color="primary">
                    Cancel
                </Button>
                <Button  color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default OnePostEdit;