import { createSlice } from "@reduxjs/toolkit";
import dummyBooks from "../data/dummyBooks";

const bookSlice = createSlice({
  name: "books",
  initialState: dummyBooks,
  reducers: {

    addBook: (state, action) => {
      state.unshift(action.payload);
    }

  }
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;