import { configureStore } from "@reduxjs/toolkit";
import goongSlice from "./slices/goongSlice";
import storageSlice from "./slices/storageSlice";
import authSlice from "./slices/authSlice.js";

export default configureStore({
  reducer: {
    goong: goongSlice,
    storage: storageSlice,
    auth : authSlice
  },
});

