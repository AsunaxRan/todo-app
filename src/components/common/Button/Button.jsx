import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

const Button = forwardRef((props, ref) => {
  const { variant, disabled, className, as, onClick, ...attributes } = props;
  let Tag = as;
  const classes = classNames(className, 'btn', {
    [`btn--${variant}`]: true,
  });

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      return onClick(e);
    }
  };

  return (
    <Tag
      {...attributes}
      ref={ref}
      className={classes}
      disabled={disabled}
      onClick={() => handleClick()}
    />
  );
});

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  as: 'button',
};

Button.propTypes = {
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  as: PropTypes.elementType,
};

export default Button;
