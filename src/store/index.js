import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk'
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const storeMiddleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, composeEnhancer(storeMiddleware))

export default store