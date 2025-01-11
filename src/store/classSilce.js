import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import {
    db,
    auth
} from '../firebase/config.js';
import { 
    collection, 
    query, 
    where, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc,
    addDoc } 
  from "firebase/firestore";

export const classSlice = createSlice({
    name: 'classes',
    initialState: {
        classes: [],
        status: 'init'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClasses.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchClasses.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.classes = action.payload;
            })
            .addCase(fetchClasses.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message;
            })
    }
})

export const selectClasses = state => state.classes;

export default classSlice.reducer;

export const fetchClasses = createAsyncThunk('classes/fetchClasses', async () => {
    console.log("SONO QUI ")
    const q = query(collection(db, "classes"), where("available", "==", true));
    console.log("q" , q)
    const classesList = [];
    console.log("classesList" , classesList)
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        classesList.push({
            id: doc.id,
            ...doc.data()
        });
    });

    console.log("classesList 2" , classesList)
    return classesList;
})