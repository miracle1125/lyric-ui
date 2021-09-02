import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SongsApi } from '../api/Songs.api';
import { RequestStatus } from '../model/RequestStatus';
import { SongAnalyze } from '../model/SongAnalyze';

export interface AnalyzeState {
  analyze?: SongAnalyze;
  errorMessage?: string;
  status: RequestStatus;
}

const initialState: AnalyzeState = {
  status: RequestStatus.Pending,
};

export interface DataForAnalyze {
  description: string;
  file: File;
  tags: string[];
  title: string;
}

export const doAnalyze = createAsyncThunk('analyze/doAnalyze', async (data: DataForAnalyze) => {
  const formData = new FormData();
  formData.append('file', data.file, data.file.name);
  formData.append('title', data.title);
  formData.append('description', data.description);
  data.tags.forEach((tag) => {
    formData.append('tags[]', tag);
  });

  const response = await SongsApi.upload(formData);

  return response;
});

export const analyzeSlice = createSlice({
  name: 'analyze',
  initialState,
  reducers: {
    reset(state) {
      delete state.analyze;
      state.status = RequestStatus.Pending;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doAnalyze.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(doAnalyze.rejected, (state, action) => {
        state.status = RequestStatus.Failed;
        state.errorMessage = action.error.message;
      })
      .addCase(doAnalyze.fulfilled, (state, action) => {
        state.analyze = action.payload;
        state.status = RequestStatus.Successful;
      });
  },
});
