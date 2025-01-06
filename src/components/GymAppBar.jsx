import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import ConfirmDialog from '../views/ConfirmDialog.jsx';
import {auth} from '../firebase/config.js';
import {useDispatch} from 'react-redux';
import {setUser} from '../store/userSlice.js';
import { signOut } from "firebase/auth";

export default function GymAppBar({ appName, user }) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function handleSignOut() {
    signOut(auth).then(() => {
      handleClose();
      dispatch(setUser(null));
    }).catch((error) => {
      console.log(error);
    });
  }


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {appName}
            </Typography>
            {user.currentUser ?
              <Button color="inherit" onClick={handleClickOpen}>Logout</Button>
              :
              null
            }
          </Toolbar>
        </AppBar>
      </Box>
      <ConfirmDialog
        open={open}
        handleClose={handleClose}
        onConfirm={handleSignOut}
        title={"Logout"}
        message={"Are you sure you want to log out?"} />
    </>
  );
}
