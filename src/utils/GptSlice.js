import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies : null,
    moviesName : null,
    moviesResults : null
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResults : (state,action) => {
      const { moviesName , moviesResults} = action.payload;
      state.moviesName = moviesName,
      state.moviesResults = moviesResults
    }
  },
});
export const { toggleGptSearchView, addGptMoviesResults } = gptSlice.actions;
export default gptSlice.reducer;
