import initReactComponent from '../utils/initReactComponent';
import WorldComponent from '../components/world';

import { injectReducer } from '../store';
import worldReducer from '../data/world/reducer';
import { setCounter } from '../data/world/actions';
import { getCounter } from '../data/world/selectors';

export default function initializeRoot(store, domEl) {
  injectReducer(store, 'worldReducer', worldReducer);

  if (localStorage) {
    const key = 'localStorageCounter';
    const counterFromStorage = parseInt(localStorage.getItem(key), 10);

    if (!Number.isNaN(counterFromStorage)) {
      store.dispatch(setCounter(counterFromStorage));
    }

    store.subscribe(() => {
      const counter = getCounter(store.getState());
      localStorage.setItem(key, counter);
    });
  }

  initReactComponent(WorldComponent, domEl, store);
}
