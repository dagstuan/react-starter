export function increment() {
  return {
    type: 'INCREMENT',
  };
}

export function decrement() {
  return {
    type: 'DECREMENT',
  };
}

export function setCounter(value) {
  return {
    type: 'SET_COUNTER',
    value,
  };
}
