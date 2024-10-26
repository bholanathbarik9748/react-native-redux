// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./Slice/Card";

const store = configureStore({
  reducer: {
    card: CardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
