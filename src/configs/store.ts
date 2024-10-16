import {
  AnyAction,
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";

import authReducer from "../configs/services/authSlice";

// Define the appReducer to combine all the reducers used in the application
const appReducer = combineReducers({
  auth: authReducer,
});

// Define the rootReducer, which is responsible for handling resetting the state of the entire application
const rootReducer = (state: any, action: AnyAction) => {
  // If the dispatched action type is 'resetAllState'
  if (action.type === "resetAllState") {
    // Reset the state of the application to undefined
    state = undefined;
  }
  // Pass the updated state and the action to the appReducer
  return appReducer(state, action);
};

// Create an action creator for resetting the state of the entire application
const resetAllState = createAction("resetAllState");

// Configure the store using the rootReducer and the getDefaultMiddleware function
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  resetAllState,
};
