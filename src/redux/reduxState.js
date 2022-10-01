import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReucer from "./profileReducer";
import findusersReducer from "./findusersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReucer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  findUsers: findusersReducer,
  auth: authReducer,
});

let store = configureStore(
  {
    reducer: reducers,
  },
  applyMiddleware(thunkMiddleware)
);
export default store;

window.store = store;
