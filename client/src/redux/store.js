import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import themeReducer from "./theme/themeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

// Config for persisting the Redux store in localStorage
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// Persisted reducer to save state to localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer and necessary middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check (needed for redux-persist)
    }),
});

export const persistor = persistStore(store);
