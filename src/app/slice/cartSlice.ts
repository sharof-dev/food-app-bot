import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, CartItem } from "../@types/GlobalTypes";

const initialState: CartState = {
    items: [],
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        }
    }
})

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;