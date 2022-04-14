import { combineReducers } from "redux";
import { test } from "./test";
import { maker } from "./maker";

export const rootReducer = combineReducers({
  test,
  maker,
});
