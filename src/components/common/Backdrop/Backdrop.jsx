import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal/Portal';
import './Backdrop.scss';

const Backdrop = ({ visible, usedFor, children }) => {
  if (!visible) return null;

  return (
    <Portal id={usedFor}>
      <div className="backdrop">
        <div className="backdrop__content">{children}</div>
      </div>
    </Portal>
  );
};

Backdrop.defaultProps = {
  visible: false,
};

Backdrop.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
  usedFor: PropTypes.string, // unique HTML element id
};

export default Backdrop;
