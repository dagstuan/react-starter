import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

export default function initReactComponent(Component, el, store, props) {
  if (el == null) return;

  render(
    <Provider store={store}>
      <Component {...props} />
    </Provider>,
    el,
  );
}
