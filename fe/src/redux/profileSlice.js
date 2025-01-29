import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "John Doe",
  email: "john.doe@example.com",
  image: "https://media.istockphoto.com/id/1495088043/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-h%E1%BB%93-s%C6%A1-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-ho%E1%BA%B7c-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ng%C6%B0%E1%BB%9Di-%E1%BA%A3nh-%C4%91%E1%BA%A1i-di%E1%BB%87n-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ch%C3%A2n.jpg?s=612x612&w=0&k=20&c=ZNv-8f5ixoGcFpltjahvCUGVA8Xc3-pL3-lt9fvxFjM=",
  balance: 100.0,
  isEditing: false,
  transactions: [
    { date: "2025-01-01", amount: 50 },
    { date: "2025-01-05", amount: -20 },
  ],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    openEditModal: (state) => {
      state.isEditing = true;
    },
    closeEditModal: (state) => {
      state.isEditing = false;
    },
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { openEditModal, closeEditModal, updateProfile } =
  profileSlice.actions;
export default profileSlice.reducer;
