import initReactComponent from '../utils/initReactComponent';
import WorldComponent from '../components/world';

import { injectReducer } from '../store';
import worldReducer from '../data/world/reducer';

export default function initializeRoot(store, domEl) {
  injectReducer(store, 'worldReducer', worldReducer);

  initReactComponent(WorldComponent, domEl, store);
}
