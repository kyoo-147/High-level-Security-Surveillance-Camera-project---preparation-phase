import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  user: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    }
  },
});

export const {
  setUser,
  setRefreshToken,
  setIsLoading
} = authSlice.actions;

export default authSlice.reducer;
