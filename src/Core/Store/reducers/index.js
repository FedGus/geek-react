import { combineReducers } from "redux";
import  messagesReducer from './messages';
import chatsReducer from './chats';

import { connectRouter } from 'connected-react-router'

export default history => combineReducers({ messagesReducer, chatsReducer, router: connectRouter(history) });