import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.loggedIn = true;
      state.userData = action.payload;
    },
    logoutUser(state) {
      state.loggedIn = false;
      state.userData = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
