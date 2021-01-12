import { combineReducers } from "redux";
import globalReducer from './globalreducer';
import homeReducer from './homereducer';

const reducer = combineReducers({homeReducer,globalReducer})  

export default reducer;