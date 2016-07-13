import {combineReducers} from 'redux';
import courses from './coursesReducer.js';

const rootReducer = combineReducers({
  courses: courses
});

export default rootReducer;
