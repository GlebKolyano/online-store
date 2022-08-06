import React from 'react';
import { CheckboxProps } from './models';

const Checkbox = (props: CheckboxProps) => {
  const { value, name, onChange, state = [] } = props;
  const isCheckedBox = state ? state.includes(value) : false;

  return (
    <li data-testid="checkbox">
      <label htmlFor={value}>
        <input
          className="filled-in"
          id={value}
          type="checkbox"
          name={name}
          value={value}
          checked={isCheckedBox}
          onChange={onChange}
        />
        <span>{value}</span>
      </label>
    </li>
  );
};

Checkbox.defaultProps = {
  state: []
};

export default Checkbox;
