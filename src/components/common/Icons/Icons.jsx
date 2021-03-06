import React from 'react';
import PropTypes from 'prop-types';

export const CheckmarkIcon = ({ size, color, ...rest }) => {
  return (
    <svg
      stroke={color}
      fill={color}
      viewBox="0 0 512 512"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"></path>
    </svg>
  );
};

CheckmarkIcon.defaultProps = {
  size: '1em',
  color: 'currentColor',
};

CheckmarkIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export const CalendarIcon = ({ size, color, ...rest }) => {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      {...rest}>
      <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
    </svg>
  );
};

CalendarIcon.defaultProps = {
  size: '1em',
  color: 'currentColor',
};

CalendarIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export const EmptyIcon = ({ size, color, ...rest }) => {
  return (
    <svg
      enableBackground="new 0 0 24 24"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="m23.908 12.331-3.963-8.587c-.489-1.059-1.558-1.744-2.725-1.744h-10.44c-1.167 0-2.236.685-2.724 1.743l-3.964 8.588c-.061.131-.092.274-.092.419v6.25c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3v-6.25c0-.145-.031-.288-.092-.419z"
        fill={color}
      />
      <path
        d="m5.184 3.438c.181-.418.577-.688 1.01-.688h11.613c.432 0 .829.27 1.01.689l3.808 8.798h-2.29c-.866 0-1.615.594-1.864 1.479l-1.193 4.239c-.036.126-.142.211-.266.211h-10.024c-.123 0-.23-.085-.266-.212l-1.193-4.238c-.249-.885-.998-1.479-1.864-1.479h-2.29z"
        fill="#f5f5f5"
      />
      <path d="m21.25 22h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-6.5c0-.106.022-.211.066-.308l4.5-10c.121-.269.389-.442.684-.442h13.5c.295 0 .563.173.684.442l4.5 10c.044.097.066.202.066.308v6.5c0 1.517-1.233 2.75-2.75 2.75zm-19.75-9.089v6.339c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-6.339l-4.235-9.411h-12.53z" />
      <path
        d="m16.506 18.5h-9.012c-.778 0-1.452-.501-1.676-1.247l-1.073-3.574c-.031-.106-.129-.179-.239-.179h-3.756c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.756c.778 0 1.452.501 1.676 1.247l1.073 3.574c.032.106.13.179.239.179h9.012c.109 0 .208-.073.239-.179l1.073-3.574c.224-.746.897-1.247 1.676-1.247h3.756c.414 0 .75.336.75.75s-.336.75-.75.75h-3.756c-.109 0-.208.073-.239.179l-1.073 3.574c-.224.746-.898 1.247-1.676 1.247z"
        {...rest}
      />
    </svg>
  );
};

EmptyIcon.defaultProps = {
  size: '5em',
  color: '#2196f3',
};

EmptyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export default {
  CheckmarkIcon,
  CalendarIcon,
  EmptyIcon,
};
