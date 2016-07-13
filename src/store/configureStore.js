import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index.js';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  // initialState is only used if we want to get initial state from the server or local storage
  // we won't be using it for this course but just putting it here for reference
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
