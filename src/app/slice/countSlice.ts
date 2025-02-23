import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../@types/GlobalTypes";
import KFC from "../../assets/image/image-removebg-preview (1).png";

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
        {
            id: 2,
            name: 'BBQ Chicken',
            category: 'BBQ',
            price: 11.98,
            image: KFC,
            quantity: 1
        },
    ]
}


const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) item.quantity += 1;
        },
        decrement: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item && item.quantity > 1) item.quantity -= 1;
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);            
        },
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.category === action.payload.category);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        }
    },
})

export const { increment, decrement, removeItem, addToCart } = countSlice.actions;
export default countSlice.reducer