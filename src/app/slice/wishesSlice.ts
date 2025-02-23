import { CartItem, CartState } from "../@types/GlobalTypes";
import KFC from "../../assets/image/image-removebg-preview (1).png";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
    items: [
        {
            id: 1,
            name: 'Prawn mix salad',
            category: 'Seafood',
            price: 5.98,
            image: KFC,
            quantity: 1
        },
    ]
}

const wishesSlice = createSlice({
    name: "wishesList",
    initialState,
    reducers: {
        removeWishes: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        addProduct: ((state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.category === action.payload.category);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        })
    }
})

export const { removeWishes, addProduct } = wishesSlice.actions;
export default wishesSlice.reducer