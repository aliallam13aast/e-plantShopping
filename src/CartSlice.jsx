import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } 
        else {
            state.items.push({ name, image, cost, quantity: 1 });
  }

    },
    removeItem: (state, action) => {
        const itemName = action.payload;
        state.items = state.items.filter(item => item.name !== itemName);
    },

    updateQuantity: (state, action) => {
          const { name, quantity } = action.payload;
  const existingItem = state.items.find(item => item.name === name);
  
  if (existingItem && quantity > 0) {
    existingItem.quantity = quantity; // Update quantity if greater than 0
  } else if (existingItem && quantity === 0) {
    state.items = state.items.filter(item => item.name !== name); // Remove item if quantity is 0
  }


    
    },

  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
