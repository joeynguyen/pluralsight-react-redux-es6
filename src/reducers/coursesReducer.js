export default function coursesReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return state.concat(action.course);
    default:
      return state;
  }
}
