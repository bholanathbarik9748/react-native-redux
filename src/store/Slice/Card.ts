// components/Card/CardSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for each item in the product array
interface ProductItem {
  id: number;
  name: string;
  price: number;
}

// Define the initial state type
interface CardState {
  product: ProductItem[];
}

const initialState: CardState = {
  product: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductItem>) => {
      state.product.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addItem, removeItem } = cardSlice.actions;
export default cardSlice.reducer;
