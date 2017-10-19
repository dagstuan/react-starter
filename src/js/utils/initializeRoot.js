export default function initializeRoot(store, domId, rootName) {
  const rootEl = document.getElementById(domId);
  if (rootEl) {
    import(/* webpackChunkName: "[request]" */ `../roots/${rootName}.js`)
      .then(rootComponent => rootComponent.default(store, rootEl));
  }
}
