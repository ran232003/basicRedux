import { createSlice,configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:"counter",
    initialState:{counter:0,showCounter:true},
    reducers:{
        change(state,action){
           console.log(state.counter)
            state.counter = state.counter + action.payload
            
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})
export default counterSlice;
export const counterActions = counterSlice.actions