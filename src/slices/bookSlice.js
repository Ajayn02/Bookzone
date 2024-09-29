import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import toast from "react-hot-toast";

const bookSlice=createSlice({
    name:"books",
    initialState:{
        books:[]
    },
    reducers:{
        addBooks(state,action){
            const sameID = state.books.filter(item=>item.id==action.payload.id)
            // console.log(sameID);
            if(sameID.length>0){
                 toast.error("Entered ID is Alredy in Use !!")
            }else{
                state.books.push(action.payload)
                toast.success("Added")
            }
        },
        deleteData(state,action){
            state.books=state.books.filter(item=>item.id!=action.payload)
            toast.error("Deleted")
        },
        updateData(state,action){
            state.books=state.books.filter(item=>item.id!=action.payload.id)
            state.books.push(action.payload)
            toast.success("Update Success")
        }
       

    }

})

export default bookSlice.reducer
export const {addBooks,deleteData,updateData}=bookSlice.actions