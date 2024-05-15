import * as React from 'react';
import { Button } from 'react-button';
import { tests } from './wrappedTests';

const itemRenderer = () => {
  return <Button>Fluent React Button</Button>;
};

export default itemRenderer;

export { tests };