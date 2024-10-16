import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { IFormInput as IFormInputSignup } from "../../pages/signup/SignupBox";
import { IFormInput as IFormInputLogin } from "../../pages/login/LoginBox";
import { AxiosError } from "axios";

type User = {
  _id: string;
  settings: [];
};

type initialStateType = {
  authToken: { accessToken: string; refreshToken: string } | null;
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: unknown;
};

const initialState: initialStateType = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  authToken: JSON.parse(localStorage.getItem("authToken") as string) || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Signup user
export const signup = createAsyncThunk(
  "/signup",
  async (userData: IFormInputSignup, thunkAPI) => {
    try {
      console.log("Signing up user:", userData); // Log
      return await authService.signup(userData);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "Auth/login",
  async (userData: IFormInputLogin, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// Forgot Password
// export const forgot = createAsyncThunk(
//   "Auth/forget-password",
//   async (userEmail: FieldValues, thunkAPI) => {
//     try {
//       return await authService.forgot(userEmail);
//     } catch (error: unknown) {
//       if (error instanceof AxiosError) {
//         const message =
//           error?.response?.data?.message || error.message || error.toString();

//         return thunkAPI.rejectWithValue(message);
//       }
//     }
//   }
// );

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    // Reset helper flags
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },

    // Logout
    logOut: (state) => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      // state.user = null;
      state.authToken = null;
    },
    // Update access token
    authTokenUpdate: (state, action) => {
      state.authToken = action.payload;
    },
    // Update user
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authToken = null;
        state.message = action.payload.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, logOut, authTokenUpdate, updateUser } = authSlice.actions;
export default authSlice.reducer;
