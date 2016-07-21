import {combineReducers} from 'redux';
import courses from './coursesReducer.js';
import authors from './authorReducer.js';
import ajaxStatusReducer from './ajaxStatusReducer.js';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  ajaxStatusReducer: ajaxStatusReducer
});

export default rootReducer;
