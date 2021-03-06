import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  login,
  logout,
  register,
  readUser,
  readUserPhoto,
  updateUser,
  updateUserPhoto,
} from "../api/firebase";

// Define async functions
const loginAsync = createAsyncThunk(
  "account/login",
  async ({ email, password }) => {
    const { data } = await login({ email, password });
    // The value we return becomes the `fulfilled` action payload
    return data;
  }
);

const registerAsync = createAsyncThunk(
  "account/register",
  async ({ name, email, password }) => {
    const { data } = await register({ name, email, password });
    // The value we return becomes the `fulfilled` action payload
    return data;
  }
);

const readUserAsync = createAsyncThunk("account/readUser", async () => {
  const user = await readUser();
  return user;
});

const updateUserAsync = createAsyncThunk(
  "account/updateUser",
  async (userInfo) => {
    return await updateUser(userInfo);
  }
);

const updateUserPhotoAsync = createAsyncThunk(
  "account/updatePhoto",
  async (userPhoto) => {
    return await updateUserPhoto(userPhoto);
  }
);

const initialState = {
  general: {
    name: "",
    email: "",
    country: "",
    style: [],
    imageUrl: "",
  },
  login: {
    hasLogin: false,
    hasAccount: true,
  },
  status: "idle",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setGeneralAccountInfo: (state, action) => {
      state.general = action.payload;
    },
    signOut: (state) => {
      logout();
      state.login.hasLogin = false;
    },
    gotoRegister: (state) => {
      state.login.hasAccount = false;
    },
    gotoLogin: (state) => {
      state.login.hasAccount = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "idle";
        state.login.hasLogin = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "error";
        state.login.hasLogin = false;
      })
      .addCase(registerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.login.hasLogin = true;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = "error";
        state.login.hasLogin = false;
      })
      .addCase(readUserAsync.fulfilled, (state, action) => {
        state.general = { ...state.general, ...action.payload };
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.general = { ...state.general, ...action.payload };
      })
      .addCase(updateUserPhotoAsync.fulfilled, (state, action) => {
        state.general = { ...state.general, ...action.payload };
      });
  },
});

// export state to global
export const selectGeneral = (state) => state.account.general;
export const selectLogin = (state) => state.account.login;
export const selectStatus = (state) => state.account.status;

// export actions to global
export const { setGeneralAccountInfo, gotoRegister, gotoLogin, signOut } =
  accountSlice.actions;

// export async function to global
export {
  loginAsync,
  registerAsync,
  readUserAsync,
  updateUserAsync,
  updateUserPhotoAsync,
};

// export reducer to global
export default accountSlice.reducer;
