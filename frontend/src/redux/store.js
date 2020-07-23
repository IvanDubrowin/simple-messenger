 
import { compose, createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux-immutable";
import thunkMiddleware from "redux-thunk";
import infoReducer from "./reducers/info";

const rootReducer = combineReducers({
    info: infoReducer
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));