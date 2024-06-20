import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    search: "", //by default search NULL hai
  },
  reducers: {
    setSerach: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { setSerach } = SearchSlice.actions;
export default SearchSlice.reducer;
