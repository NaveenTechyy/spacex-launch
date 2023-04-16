import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import callAPi from "../../services/callApi";

const initialState = {
  rocketsData: [],
  Loading: false,
};

export const getRocketsDataAsync = createAsyncThunk("rockets", async (data) => {
  const response = await callAPi(data);
  return response;
});

export const RocketsSlice = createSlice({
  name: "rockets",
  initialState,
  extraReducers: {
    [getRocketsDataAsync.pending]: (state) => {
      state.Loading = true;
    },
    [getRocketsDataAsync.fulfilled]: (state, { payload }) => {
      state.rocketsData = payload;
      state.Loading = false;
    },
  },
});

export default RocketsSlice.reducer;
