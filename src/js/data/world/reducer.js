export default function commonReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.updateIn(['counter'], 0, counter => counter + 1);
    case 'DECREMENT':
      return state.updateIn(['counter'], 0, counter => counter - 1);
    default:
      return state;
  }
}