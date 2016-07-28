import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index.js';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  // initialState is only used if we want to get initial state from the server or local storage
  // we won't be using it for this course but just putting it here for reference
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
