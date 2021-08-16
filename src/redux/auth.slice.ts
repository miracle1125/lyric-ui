import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../model/RequestStatus';
import { AuthApi } from './../auth/Auth.api';
import { HttpClient } from './../auth/HttpClient';

export interface AuthState {
  errorMessage?: string;
  status: RequestStatus;
  token?: string;
  userId?: number;
}

const initialState: AuthState = {
  status: RequestStatus.Pending,
};

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
    builder
      .addCase(logIn.pending, (state) => {
        state.errorMessage = undefined;
        state.status = RequestStatus.Loading;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.status = RequestStatus.Failed;
        state.errorMessage = action.error.message;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.session_key;
        state.userId = action.payload.user_id;
        state.status = RequestStatus.Successful;
      });
  },
});
