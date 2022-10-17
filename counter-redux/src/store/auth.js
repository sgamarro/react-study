import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = { isAuthenticated: false };

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    LogOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authenticationSlice.actions;
export default authenticationSlice.reducer;
