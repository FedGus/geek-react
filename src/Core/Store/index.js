import { createStore } from "redux"
import initReducers from './reducers'

export default () => { 
    return createStore(initReducers, {});
}