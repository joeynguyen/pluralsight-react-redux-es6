import * as types from '../actions/actionTypes.js';

export default function coursesReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [ ...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
