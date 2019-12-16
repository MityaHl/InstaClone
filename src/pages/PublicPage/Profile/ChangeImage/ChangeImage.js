import React, { useState } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { css } from 'aphrodite';
import styles from './ChangeImageStyles';


const ChangeImage = ({authUser, isChangeImage, onChangeImage, onPostNewImage}) => {

    const[image, setImage] = useState('');

    const changeImage = () => {
        Axios  
            .post('http://localhost:8000/editImage', {image: image, id: authUser.id})
            .then( onPostNewImage(image), onChangeImage )
    }
  return (
      <Dialog open={isChangeImage} aria-labelledby="form-dialog-title" onBackdropClick={onChangeImage} minWidth='sm' fullWidth={true}>
        <DialogTitle id="form-dialog-title">Change image</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Change yuor profile image.
            </DialogContentText>
        </DialogContent>
        <TextField
            className={css(styles.textFields)}
            id="outlined-helperText"
            label="Image"
            margin="normal"
            variant="outlined"
            value={authUser.image}
            onChange={ (e) => {
                setImage(e.target.value);
            }}
            />
        <DialogActions>
            <Button  color="primary" onClick={onChangeImage}>
                Cancel
            </Button>
            <Button  color="primary" onClick={changeImage}>
                Change
            </Button>
        </DialogActions>
    </Dialog>
  )
    
}

export default ChangeImage;