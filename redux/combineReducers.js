import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './slice/todo';

export const root = combineReducers({
	todo: todoReducer,
});
