import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //Vanila(older) redux - Don't Mutate State
            // const newState = [...state];
            // retun newState;

            //Redux Toolkit - Uses immer library to mutating the data
            //Mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0; // state = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer