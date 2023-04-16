import { configureStore } from "@reduxjs/toolkit";
import HistorySlice from "./slice/HistorySlice";
import LaunchSlice from "./slice/LaunchSlice";
import RocketsSlice from "./slice/RocketsSlice";
import AboutSlice from "./slice/AboutSlice";

const store = configureStore({
  reducer: {
    history: HistorySlice,
    launch: LaunchSlice,
    rockets: RocketsSlice,
    AboutInfo: AboutSlice,
  },
});
export default store;
