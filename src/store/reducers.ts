import { combineReducers } from 'redux';
import { AuthReducer, LoaderReducer } from './reducers-actions';

const rootReducer = combineReducers({ auth: AuthReducer, loader: LoaderReducer });

export default rootReducer;