import * as React from 'react';
import {
  Combobox,
  Option,
} from 'react-combobox';
import { tests } from './wrappedTests';

const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
const itemRenderer = () => {
  return (<Combobox placeholder="Select an animal">
    {options.map((option) => (
      <Option key={option} disabled={option === "Ferret"}>
        {option}
      </Option>
    ))}
  </Combobox>);
};

export default itemRenderer;
export { tests };