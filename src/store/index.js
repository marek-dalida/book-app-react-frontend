import bookReducer from "./bookReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';

export const store = createStore(bookReducer, applyMiddleware(thunk));
