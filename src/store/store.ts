import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./Slice/Card"; // Ensure this path is correct

const store = configureStore({
  reducer: {
    card: CardReducer, // Make sure CardReducer is a valid reducer
  },
});

export type RootState = ReturnType<typeof store.getState>; // To infer the state type
export type AppDispatch = typeof store.dispatch; // To infer the dispatch type

export default store; // Export the store
