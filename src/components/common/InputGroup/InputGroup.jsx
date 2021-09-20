import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './InputGroup.scss';
import Input from 'components/common/Input/Input';

const InputGroup = forwardRef((props, ref) => {
  const { prefix, suffix, ...inputProps } = props;

  return (
    <div className="input-group">
      <label className="input-group__wrapper">
        {prefix && (
          <span className="input-group__addon input-group__addon--prefix">
            {prefix}
          </span>
        )}
        <Input {...inputProps} className="input-group__input" ref={ref} />
        {suffix && (
          <span className="input-group__addon input-group__addon--suffix">
            {suffix}
          </span>
        )}
      </label>
    </div>
  );
});

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
  prefix: PropTypes.element,
  suffix: PropTypes.element,
};

export default InputGroup;
