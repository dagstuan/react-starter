export default function commonReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.updateIn(['counter'], 0, counter => counter + 1);
    case 'DECREMENT':
      return state.updateIn(['counter'], 0, counter => counter - 1);
    case 'SET_COUNTER':
      return state.set('counter', action.value);
    default:
      return state;
  }
}
