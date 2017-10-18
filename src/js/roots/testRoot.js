import initReactComponent from '../utils/initReactComponent';
import WorldComponent from '../components/test';

export default function initializeRoot(store, domEl) {
  initReactComponent(WorldComponent, domEl, store);
}
