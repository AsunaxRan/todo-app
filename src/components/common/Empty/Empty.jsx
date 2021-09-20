import React from 'react';
import PropTypes from 'prop-types';
import { EmptyIcon } from '../Icons/Icons';
import './Empty.scss';

const Empty = (props) => {
  const { message, ...rest } = props;

  return (
    <div className="empty" {...rest}>
      <EmptyIcon />
      {message && <div className="mt-1">{message}</div>}
    </div>
  );
};

Empty.defaultProps = {
  message: 'Empty data',
};

Empty.propTypes = {
  message: PropTypes.string,
};

export default Empty;
