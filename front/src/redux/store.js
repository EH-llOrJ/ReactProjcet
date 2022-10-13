import { createStore, applyMiddlware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddlware(thunk));

export default store;
