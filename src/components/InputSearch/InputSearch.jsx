import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/common/Input/Input';
import useDebounce from 'hooks/useDebounce';

const InputSearch = (props) => {
  const { onSearch, value, ...inputProps } = props;
  const [text, setText] = useState(value);
  const searchTerm = useDebounce(text, 400);

  useEffect(() => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  }, [searchTerm]);

  return (
    <Input
      {...inputProps}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

InputSearch.defaultProps = {
  value: '',
};

InputSearch.propTypes = {
  onSearch: PropTypes.func,
  value: PropTypes.string,
};

export default InputSearch;
