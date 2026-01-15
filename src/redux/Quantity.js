import { configureStore, createSlice } from "@reduxjs/toolkit";

const QuantitySlice = createSlice({
    name: "Qunatity",
    initialState: [],
    reducers: {
        addQuantity: (state, action) => { 
            state.push(action.payload);
        },
        increment: (state, action) => {

            const item = state.find((item) => item.id == action.payload);
            if (item) {
                item.qty++;
            }

            // return state.map((item) => {
            //     if (item.id == action.payload) {
            //         console.log('hello');
            //         return { ...item, qty:item.qty+1 };
                   
            //     }
            //     else {
            //         return item;
            //     }
            // })
        },
        decrement: (state, action) => {
            const item = state.find((item) => item.id == action.payload);
            if (item) {
                if (item.qty > 0) {
                    item.qty--; 
                }
               
          }
        }
        
    }
});
export default QuantitySlice;
export const QuantityActions = QuantitySlice.actions;