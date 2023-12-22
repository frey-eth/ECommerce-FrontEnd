import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import blogcategoryService from "./blogCategoryService";

export const getBlogCategory = createAsyncThunk(
  "Blog/category",
  async (thunkAPi) => {
    try {
      return await blogcategoryService.getBlogCategory();
    } catch (error) {
      return thunkAPi.rejectWithValue(error);
    }
  }
);
const initialState = {
  blogCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const blogcategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.blogCategories = action.payload;
      })
      .addCase(getBlogCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default blogcategorySlice.reducer;
