import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";

const appStore = configureStore({
    reducer:{
        user : useReducer,
    }
})
//git add
export default appStore;