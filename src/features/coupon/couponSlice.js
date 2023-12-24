import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import couponService from "./couponService";

export const getCoupons = createAsyncThunk("Coupon/get", async (thunkAPi) => {
  try {
    return await couponService.getCoupon();
  } catch (error) {
    return thunkAPi.rejectWithValue(error);
  }
});
const initialState = {
  coupons: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoupons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoupons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coupons = action.payload;
      })
      .addCase(getCoupons.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default couponSlice.reducer;
