import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
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
import styles from './CreatePostStyles';


const CreatePost = ({isCreate, onAddPost}) => {

    const addPost = () => {
        onAddPost()
    };

    return (
        <Dialog open={isCreate} aria-labelledby="form-dialog-title" onBackdropClick={addPost}>>
        <DialogTitle id="form-dialog-title">Creating post</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To create a post, please, enter title, upload image and write description here. Also you can add some tags.
            </DialogContentText>
            <Typography variant="h6" className={ css(styles.typography) }>
                Title
            </Typography>
            <FormGroup>
                <TextField
                id="outlined-search"
                label="Title"
                type="text"
                className={ css(styles.textField) }
                margin="normal"
                variant="outlined"
                />
                <Typography variant="h6" className={ css(styles.typography) }>
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
                <Typography variant="h6" className={ css(styles.typography) }>
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
                <Typography variant="h6" className={ css(styles.typography) }>
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
            <Button  color="primary" onClick={addPost}>
                Create
            </Button>
        </DialogActions>
      </Dialog>
    )
}

export default CreatePost;