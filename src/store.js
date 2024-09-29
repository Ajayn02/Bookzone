import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice";

const bookStore=configureStore({
    reducer:{
        bookReducer:bookSlice
    }
})

export default bookStore