import { combineReducers } from "redux";
import globalReducer from './globalreducer';
import homeReducer from './homereducer';
import createBlogReducer from './createBlogReducer';

const reducer = combineReducers({homeReducer,globalReducer,createBlogReducer})  

export default reducer;