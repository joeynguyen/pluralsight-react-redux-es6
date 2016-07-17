import {combineReducers} from 'redux';
import courses from './coursesReducer.js';
import authors from './authorReducer.js';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors
});

export default rootReducer;
