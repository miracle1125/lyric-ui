import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthApi } from './../auth/Auth.api';
import { HttpClient } from './../auth/HttpClient';

interface AuthState {
  token?: string;
  userId?: number;
}

const initialState: AuthState = {};

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await AuthApi.login(email, password);
    HttpClient.setToken(response.session_key);

    return response;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      delete state.token;
      delete state.userId;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.token = action.payload.session_key;
      state.userId = action.payload.user_id;
    });
  },
});
