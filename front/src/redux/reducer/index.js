import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  loginReducer,
  CartReducer,
});

export default rootReducer;
