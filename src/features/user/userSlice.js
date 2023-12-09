import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserWishList = createAsyncThunk(
  "auth/get-wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWishList();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProductToCart = createAsyncThunk(
  "auth/add-product-to-cart",
  async (cartData, thunkAPI) => {
    try {
      return await authService.addProductToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserCart = createAsyncThunk(
  "auth/get-Cart",
  async (thunkAPI) => {
    try {
      return await authService.getUserCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserCart = createAsyncThunk(
  "auth/delete-Cart",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteUserCart(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProductQuantityFromCart = createAsyncThunk(
  "auth/update-quantity",
  async (cartDetail, thunkAPI) => {
    try {
      return await authService.updateProductQuantityFromCart(cartDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createOrder = createAsyncThunk(
  "auth/create-order",
  async (orderDetail, thunkAPI) => {
    try {
      return await authService.createOrder(orderDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const emptyUserCart = createAsyncThunk(
  "auth/empty-cart",
  async (thunkAPI) => {
    try {
      return await authService.emptyUserCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserOrder = createAsyncThunk(
  "auth/get-Order",
  async (thunkAPI) => {
    try {
      return await authService.getUserOrder();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserOrder = createAsyncThunk(
  "auth/delete-Order",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteUserOrder(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/update-user",
  async (userDetail, thunkAPI) => {
    try {
      return await authService.updateUser(userDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const forgotPasswordToken = createAsyncThunk(
  "auth/password/token",
  async (data, thunkAPI) => {
    try {
      return await authService.forgotPasswordToken(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetPasswordToken = createAsyncThunk(
  "auth/password/resetPassword",
  async (data, thunkAPI) => {
    try {
      return await authService.resetPasswordToken(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getCustomerFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
  user: getCustomerFromLocalStorage,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
          toast.success("🦄 You have created an account successfully!");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error.message);
        }
      })
      //login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          toast.success("Login successful!");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error.message);
        }
      })
      //Get userwishlist
      .addCase(getUserWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.wishlist = action.payload;
      })
      .addCase(getUserWishList.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //Add Product To Cart
      .addCase(addProductToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cardProduct = action.payload;
        toast.success("Product is added to cart!");
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //get User cart
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cartProducts = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //delete a cart
      .addCase(deleteUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cartProducts = state.cartProducts.filter(
          (cart) => cart._id !== action.payload._id
        );
      })
      .addCase(deleteUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //update product quantity from cart
      .addCase(updateProductQuantityFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductQuantityFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cartProducts = state.cartProducts.filter((cart) =>
          cart._id === action.payload._id ? (cart = action.payload) : cart
        );
      })
      .addCase(updateProductQuantityFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //create order
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.orderData = action.payload;
        toast.success("You have ordered!");
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //empty user cart
      .addCase(emptyUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emptyUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cartProducts = [];
      })
      .addCase(emptyUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //Get user Order
      .addCase(getUserOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.orderedData = action.payload;
      })
      .addCase(getUserOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //delete user order
      .addCase(deleteUserOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.orderedData = state.orderedData?.filter(
          (item) => item._id !== action.payload._id
        );
        toast.error("You have deleted this order!");
      })
      .addCase(deleteUserOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //update user detail
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updatedUser = action.payload;
        toast.success("You have updated profile!");
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //forgot password token
      .addCase(forgotPasswordToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPasswordToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.token = action.payload;
        toast.success("Email send successfully!");
      })
      .addCase(forgotPasswordToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      //reset password token
      .addCase(resetPasswordToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPasswordToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.pass = action.payload;
        toast.success("Reset Password!");
      })
      .addCase(resetPasswordToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default authSlice.reducer;
