import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user", //name of slice
    initialState:[], // initial state of the data
    reducers:{ 
        addUser(state,action){
            state.push(action.payload)
        },
        deleteUser(state,action){
            state.splice(action.payload,1);
        },
        removeAllUsers(state,action){
            return state = [];
        },
    }, //Reducers for userslice
})

export  const {addUser,deleteUser,removeAllUsers} = userSlice.actions;
export default userSlice.reducer;