 
import { compose, createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux-immutable";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({});

export const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));