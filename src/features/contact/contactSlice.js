import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactService";
import { toast } from "react-toastify";

export const createEnquiry = createAsyncThunk(
  "Enquiry/Create",
  async (value,thunkAPi) => {
    try {
      return await contactService.createEnquiry(value);
    } catch (error) {
      return thunkAPi.rejectWithValue(error);
    }
  }
);
const initialState = {
  Enquiry: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const contactSlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Enquiry = action.payload;
        toast.success("You have send enquiry!");
      })
      .addCase(createEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default contactSlice.reducer;
