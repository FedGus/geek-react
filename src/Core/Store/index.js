import { createStore, compose, applyMiddleware } from "redux";
import initReducers from './reducers';

import middleware from '@middleware';

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export default () => { 
    return createStore(initReducers, {}, compose(applyMiddleware(...middleware), reduxDevTool));
}