import { configureStore } from '@reduxjs/toolkit';
import { root } from './combineReducers';

export const store = configureStore({
	reducer: { root },
});
