import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Checkbox.scss';

const Checkbox = (props) => {
  const { label, checked, className, disabled, onChange, ...inputProps } =
    props;

  const handleChange = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onChange) {
      return onChange(e);
    }
  };

  return (
    <label
      className={classNames('checkbox', className, {
        'checkbox--checked': checked,
      })}>
      <span className="checkbox__wrapper">
        <input
          type="checkbox"
          disabled={disabled}
          {...inputProps}
          className="checkbox__input"
          defaultChecked={checked}
          onChange={handleChange}
        />
        <span className="checkbox__inner"></span>
      </span>
      <span className="checkbox__label">{label && label}</span>
    </label>
  );
};

Checkbox.defaultProps = {
  disabled: false,
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
