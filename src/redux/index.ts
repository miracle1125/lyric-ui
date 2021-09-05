import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { analyzeSlice, AnalyzeState } from './analyze.slice';
import { authSlice, AuthState } from './auth.slice';

export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthState>(
      {
        key: 'auth',
        storage,
        whitelist: ['token', 'userId'],
      },
      authSlice.reducer,
    ),
    analyze: persistReducer<AnalyzeState>(
      {
        key: 'analyze',
        storage,
        whitelist: ['analyze', 'status'],
      },
      analyzeSlice.reducer,
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
