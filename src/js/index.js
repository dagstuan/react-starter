import { configureStore } from "./store";
import initializeRoot from "./utils/initializeRoot";

import "../less/index.less";

const roots = ["testRoot", "worldRoot"];

function initialize() {
  const store = configureStore();

  roots.map(rootName => initializeRoot(store, `js-${rootName}`, rootName));
}

initialize();
