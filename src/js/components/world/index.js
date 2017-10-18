import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '../../data/world/selectors';
import * as actions from '../../data/world/actions';

function WorldPage({
  counter,
  increment,
  decrement,
}) {
  return (
    <div>
      <h1>Min Verden! counter er: { counter }</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
WorldPage.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counter: selectors.getCounter(state),
});

const mapDispatchToProps = {
  increment: actions.increment,
  decrement: actions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorldPage);
