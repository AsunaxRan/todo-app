import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Select.scss';
import classNames from 'classnames';

const Select = forwardRef((props, ref) => {
  const { options, className, ...selectProps } = props;

  const classes = classNames('input', className);

  return (
    <select {...selectProps} className={classes} ref={ref}>
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';

Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }).isRequired,
  ),
};

export default Select;
