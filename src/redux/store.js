// Redux store configuration for managing books state

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer
  }
});

export default store;