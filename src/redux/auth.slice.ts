import { HttpClient } from './../auth/HttpClient';
import { AuthApi } from './../auth/Auth.api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthorized: boolean;
  token?: string;
}

const LOCAL_STORAGE_KEY = 'token';

const initialState: AuthState = {
  isAuthorized: false,
  token: undefined,
};

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    await AuthApi.login(email, password);
    HttpClient.setToken('token');
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isAuthorized = true;
      // state.token = action.payload;
      // localStorage.setItem(LOCAL_STORAGE_KEY, action.payload);
    });
  },
});
