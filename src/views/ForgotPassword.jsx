import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import {auth} from '../firebase/config.js';
import { FormControl, FormLabel } from '@mui/material';
import { sendPasswordResetEmail} from "firebase/auth";

function ForgotPassword({ open, handleClose, setResetPassword, setResetPasswordMessage}) {
  
    const [email, setEmail] = React.useState({});

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email.email)
      .then(() => {
        setResetPasswordMessage('Email inviata con successo!')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;        
        setResetPasswordMessage('errorCode: ', errorCode, 'errorMessage: ', errorMessage);
      });
  }

  const handleCancel = ()=> {
    setResetPassword(false);
    handleClose();
  }

  function handleCredentials(e) {
    setEmail({...email, [e.target.name]: e.target.value});
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleForgotPassword();
          handleClose();
        },
        sx: { backgroundImage: 'none' },
      }}
    >
      
      <DialogTitle>Reset password</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
          Enter your account&apos;s email address, and we&apos;ll send you a link to
          reset your password.
        </DialogContentText>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
            <OutlinedInput
              autoFocus
              required
              margin="dense"
              id="email"
              type="email"
              name="email"
              label="Email address"
              placeholder="your@email.com"              
              fullWidth
              onChange={(e)=>{handleCredentials(e)}}
            />
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" type="submit">
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;