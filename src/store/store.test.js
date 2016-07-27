import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as coursesActions from '../actions/coursesActions';

describe('Store', () => {
  it('should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };

    // act
    const action = coursesActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Clean Code'
    };
    expect(actual).toEqual(expected);
  });
});
