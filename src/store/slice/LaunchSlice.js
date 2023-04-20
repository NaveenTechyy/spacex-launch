import {
  createSlice,
  createAsyncThunk,
  combineReducers,
} from "@reduxjs/toolkit";
import callAPi from "../../services/callApi";

const initialState = {
  launchData: [],
  pastLaunchData: [],
  upcomingLaunchData: [],
};

export const getLaunchAsync = createAsyncThunk("launches", async data => {
  const response = await callAPi(data);
  return response;
});

export const getUpcomingLaunchAsync = createAsyncThunk(
  "launches/upcoming",
  async data => {
    const response = await callAPi(data);
    return response;
  }
);
export const LaunchSlice = createSlice({
  name: "launch",
  initialState,
  extraReducers: {
    [getLaunchAsync.pending]: state => {
      state.Loading = true;
    },
    [getLaunchAsync.fulfilled]: (state, { payload }) => {
      state.launchData = payload;
      state.Loading = false;
    },
  },
});

export const upcomingLaunchSlice = createSlice({
  name: "upcomingLaunch",
  initialState,
  extraReducers: {
    [getUpcomingLaunchAsync.pending]: state => {
      state.Loading = true;
    },
    [getUpcomingLaunchAsync.fulfilled]: (state, { payload }) => {
      state.upcomingLaunchData = payload;
      state.Loading = false;
    },
  },
});

export const { fetchLaunch } = LaunchSlice.actions;

export default combineReducers({
  LaunchSlice: LaunchSlice.reducer,
  upcomingLaunchSlice: upcomingLaunchSlice.reducer,
});
