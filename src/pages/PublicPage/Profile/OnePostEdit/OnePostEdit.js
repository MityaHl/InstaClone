import React, { useState } from 'react';
import Axios from 'axios';
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
import Autocomplete from '@material-ui/lab/Autocomplete';


const OnePostEdit = ({ onQueryPosts, postEditFalse, editPostData, closeEditPostDialog}) => {

    const editPostFalse = () => {
        postEditFalse();
    }

    const [content, setContent] = useState(editPostData.content);
    const [image, setImage] = useState(editPostData.image);  
    const [title, setTitle] = useState(editPostData.title); 
    const tag = editPostData.tag; 
    const data = {
            id: editPostData.id,
            title: title,
            image: image,
            content: content,
            tag: tag
        };
    console.log('data', data);

    const onEditPost = () => {
        const data = {
            id: editPostData.id,
            title: title,
            image: image,
            content: content,
            tag: tag
        };
        Axios
            .post('http://localhost:8000/editPost', data)
            .then(

            )
    }
    
    return (
        <Dialog open={editPostData.title} onBackdropClick={closeEditPostDialog}>
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
                        defaultValue={editPostData.title}
                        onChange = {(e)=>{
                            setTitle(e.target.value);
                        }}
                    />
                    <Typography variant="h6">
                        Tags
                    </Typography>

                    <Autocomplete
                        id="combo-box-demo"
                        options={['one', 'two']}
                        getOptionLabel={option => option}
                        style={{ width: '100%', marginTop: '20px', marginBottom: '5px' }}
                        renderInput={params => (
                            <TextField {...params} label="Tag" variant="outlined" fullWidth/>
                        )}
                        defaultValue={editPostData.tag}
                        
                    />
                    <Typography variant="h6">
                        Image
                    </Typography>
                    <TextField
                        id="outlined-search"
                        label="Title"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        defaultValue={editPostData.image}
                        onChange={
                            (e) => {
                                setImage(e.target.value);
                            }
                        }
                    />
                    {/* <input
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
                    </label> */}
                    <Typography variant="h6">
                        Content
                    </Typography>
                    <TextField
                        id="outlined-search"
                        type="text"
                        multiline={true}
                        rows='5'
                        margin="normal"
                        variant="outlined"
                        defaultValue={editPostData.content}
                        onChange={
                            (e) => {
                                setContent(e.target.value);
                            }
                        }
                    />
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button  color="primary" onClick={closeEditPostDialog}>
                    Cancel
                </Button>
                <Button  color="primary" onClick={onEditPost}>
                    Edit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default OnePostEdit;