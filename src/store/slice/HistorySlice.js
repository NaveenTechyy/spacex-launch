import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callAPi from "../../services/callApi";

const initialState = {
  historyData: [],
  Loading: false,
};

export const getHistoryAsync = createAsyncThunk("history", async (data) => {
  const response = await callAPi(data);
  return response;
});

export const HistorySlice = createSlice({
  name: "history",
  initialState,
  extraReducers: {
    [getHistoryAsync.pending]: (state) => {
      state.Loading = true;
    },
    [getHistoryAsync.fulfilled]: (state, { payload }) => {
      state.historyData = payload;
      state.Loading = false;
    },
  },
});

export default HistorySlice.reducer;
