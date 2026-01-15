import { createSlice } from "@reduxjs/toolkit";
import { food_items } from "../food";
 const cartSlice= createSlice({
     name: "cart",
     initialState: [],
     reducers: {
         Additem: (state, action) => { 
             let exitingiem = state.includes(action.payload);
             if (!exitingiem) {
                 state.push(action.payload);  
             }
            
            
         },
         Removeitem: (state,action) => {
            return state.filter((itemId) => itemId !== action.payload);
         },
         increment: (state, action) => {
             let itemindex = food_items.findIndex((item) => item.id == action.payload);
            
           
         }
         
     }
 })
export default cartSlice;
export const cartAction = cartSlice.actions;