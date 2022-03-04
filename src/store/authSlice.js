import { createSlice,configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name:"auth",
    initialState:{auth:false},
    reducers:{
        login(state){
            state.auth = true;
        },
        logout(state){
            state.auth = false;
        }
    }
})

export default authSlice;
export const authActions = authSlice.actions;