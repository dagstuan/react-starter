import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import { Map } from 'immutable';

const middlewares = [];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
  /* eslint-enable no-underscore-dangle */
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function getValues(obj) {
  return Object.keys(obj).map(k => obj[k]);
}

function reduceReducers(...reducers) {
  return (state, action) =>
    reducers.reduce(
      (prevState, reducer) => reducer(prevState, action),
      state,
    );
}

const defaultReducer = state => state;

export function injectReducer(store, name, newReducer) {
  // eslint-disable-next-line no-param-reassign
  store.reducers[name] = newReducer;

  store.replaceReducer(reduceReducers(...getValues(store.reducers)));
}

export function configureStore() {
  const createStoreWithMiddleware = enhancer(createStore);
  const store = createStoreWithMiddleware(defaultReducer, Map());

  store.reducers = {
    defaultReducer,
  };

  return store;
}
