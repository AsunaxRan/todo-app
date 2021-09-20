import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';
import Backdrop from '../Backdrop/Backdrop';

const Loader = ({ visible }) => {
  return (
    <Backdrop visible={visible} usedFor="loader">
      <div className="loader" />
    </Backdrop>
  );
};

Loader.defaultProps = {
  visible: false,
};

Loader.propTypes = {
  visible: PropTypes.bool,
};

export default Loader;
