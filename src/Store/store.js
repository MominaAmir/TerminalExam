import {configureStore} from '@reduxjs/toolkit' 
import createSlice from '../Slice/createSlice'


export const store = configureStore({
    reducer:{
        slice : createSlice
    },
})