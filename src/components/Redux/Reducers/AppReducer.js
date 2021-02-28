import {combineReducers} from "redux";
import {startReducer} from "./StartReducer";
import {loginReducer} from "./LoginReducer";

export const AppReducer = combineReducers({
  start:startReducer,
  username:loginReducer,

})