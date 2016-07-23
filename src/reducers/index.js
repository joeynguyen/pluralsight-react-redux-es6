import {combineReducers} from 'redux';
import courses from './coursesReducer.js';
import authors from './authorReducer.js';
import ajaxCallsInProgress from './ajaxStatusReducer.js';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
