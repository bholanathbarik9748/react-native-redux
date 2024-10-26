import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardState {
  items: Array<{ id: string; name: string }>; // Define your state structure
}

const initialState: CardState = {
  items: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cardSlice.actions; // Export actions
export default cardSlice.reducer; // Export reducer
