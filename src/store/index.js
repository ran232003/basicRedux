import {createStore} from 'redux';
import { createSlice,configureStore } from '@reduxjs/toolkit';
import counterSlice from "./counterSlice";
import authSlice from './authSlice';

// const counterSlice = createSlice({
//     name:"counter",
//     initialState:{counter:0,showCounter:true},
//     reducers:{
//         change(state,action){
//            console.log(state.counter)
//             state.counter = state.counter + action.payload
            
//         },
//         toggle(state){
//             state.showCounter = !state.showCounter
//         }
//     }
// })

// const authSlice = createSlice({
//     name:"auth",
//     initialState:{auth:false},
//     reducers:{
//         login(state){
//             state.auth = true;
//         },
//         logout(state){
//             state.auth = false;
//         }
//     }
// })

const store = configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
})




//redux solution 
// const counterReducser = (state = {counter:0,showCounter:true},action)=>{
//     if(action.type === "change"){
//         return {counter:state.counter + action.payload,showCounter:state.showCounter}
//     }
//     if(action.type === "toggle"){
//         return {counter:state.counter,showCounter:!state.showCounter}
//     }
    
//     return state

// }

// const store = createStore(counterReducser);

export default store;