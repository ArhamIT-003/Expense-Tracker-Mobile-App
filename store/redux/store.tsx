import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expense";

const store = configureStore({
  reducer: expenseReducer, // Add your reducers here
});


export type RootState = ReturnType<typeof store.getState>;
export default store;
