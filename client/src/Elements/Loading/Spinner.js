import React, { Fragment } from 'react';
import spinner from './loader.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: 'auto', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </Fragment>
);
