import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    scores: [],
    isLoading: false,
  },
  reducers: {
    getScoresFetch: (state) => {
      state.isLoading = true;
    },
    getScoresSuccess: (state, action) => {
      state.scores = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getScoresFetch, getScoresSuccess } = scoreSlice.actions;
export default scoreSlice.reducer;
