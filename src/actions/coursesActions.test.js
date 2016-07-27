import expect from 'expect';
import * as coursesActions from './coursesActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Courses Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      // act
      const action = coursesActions.createCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

// Test an async action
describe('Async action', () => {
  afterEach(() => {
    // perform cleanup after each test
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //  .get('/courses'/)
    //  .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] } });

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(coursesActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toBe(types.LOAD_COURSES_SUCCESS);
      // callback we defined in parameter that tells Mocha async work is complete
      done();
    });
  });
});
