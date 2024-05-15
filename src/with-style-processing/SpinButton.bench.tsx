import * as React from 'react';
import { SpinButton } from 'react-spinbutton';
import { tests } from './wrappedTests';

const itemRenderer = () => {
  return <SpinButton defaultValue={5} min={0} max={10}/>;
};

export default itemRenderer;

export { tests };