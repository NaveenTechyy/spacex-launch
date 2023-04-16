import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import callAPi from "../../services/callApi";

const initialState = {
  AboutInfo: {},
  Loading: false,
};

export const getAboutInfo = createAsyncThunk("AboutInfo", async data => {
  const response = await callAPi(data);
  return response;
});

export const AboutSlice = createSlice({
  name: "AboutInfo",
  initialState,
  extraReducers: {
    [getAboutInfo.pending]: state => {
      state.Loading = true;
    },
    [getAboutInfo.fulfilled]: (state, payload) => {
      state.AboutInfo = payload;
      state.Loading = false;
    },
  },
});

export default AboutSlice.reducer;
