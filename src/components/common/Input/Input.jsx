import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.scss';

const Input = forwardRef((props, ref) => {
  const { className, as, ...inputProps } = props;
  const classes = classNames(className, 'input');

  return as === 'textarea' ? (
    <textarea {...inputProps} className={classes} ref={ref} />
  ) : (
    <input {...inputProps} className={classes} ref={ref} />
  );
});

Input.displayName = 'Input';

Input.defaultProps = {
  as: 'input',
};

Input.propTypes = {
  className: PropTypes.string,
  as: PropTypes.elementType,
};

export default Input;
