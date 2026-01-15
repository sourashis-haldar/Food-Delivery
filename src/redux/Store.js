import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart";
import Qunatity from "./Quantity"






const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        Qunatity:Qunatity.reducer
    }
});

export default store;