import React from 'react';
import ReactDOM from 'react-dom';

const World = () => (
  <h1>Min Verden!</h1>
);

ReactDOM.render(
  <World />,
  document.getElementById('root'),
);

const testElem = document.getElementById('testElem');
if (testElem) {
  import('./components/test').then((testComponent) => {
    ReactDOM.render(
      testComponent.default(),
      testElem,
    );
  });
}
