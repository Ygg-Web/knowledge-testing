import { combineReducers } from "redux";
import { test } from "./test";
import { maker } from "./maker";
import { auth } from "./auth";

export const rootReducer = combineReducers({
  test,
  maker,
  auth,
});
