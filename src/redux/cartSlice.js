import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    favorites: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    favoriteItem: (state, action) => {
      state.favorites.push(action.payload);
    }
  }
});

export const { addItem, deleteItem, updateItem, favoriteItem } = cartSlice.actions;
export default cartSlice.reducer;
