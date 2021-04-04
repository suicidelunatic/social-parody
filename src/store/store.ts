import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// @ts-ignore
const store = configureStore({ reducer: rootReducer });

export default store;