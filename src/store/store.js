import { configureStore } from '@reduxjs/toolkit';
import userReducer  from './userSlice.js';
import classesReducer from './classSilce.js';

export default configureStore({
    reducer: {
      users: userReducer,
      classes: classesReducer
    }
  })