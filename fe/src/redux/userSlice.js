import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Lưu thông tin người dùng sau khi đăng nhập
  isLoggedIn: false, // Trạng thái đăng nhập
  error: null, // Lưu thông tin lỗi nếu có
};

// Action handler functions
const handleLoginSuccess = (state, action) => {
  state.user = action.payload; // Lưu thông tin user từ payload
  state.isLoggedIn = true;
  state.error = null; // Xóa lỗi trước đó
};

const handleLoginError = (state, action) => {
  state.error = action.payload; // Lưu lỗi từ payload
  state.isLoggedIn = false;
};

const handleLogout = (state) => {
  state.user = null; // Xóa thông tin người dùng
  state.isLoggedIn = false;
  state.error = null;
};

// Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: handleLoginSuccess,
    loginError: handleLoginError,
    logoutC: handleLogout,
  },
});

// Export actions
export const { loginSuccess, loginError, logoutC } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
