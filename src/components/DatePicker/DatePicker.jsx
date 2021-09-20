import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'components/common/InputGroup/InputGroup';
import { CalendarIcon } from 'components/common/Icons/Icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatDate } from 'utils/formatDate';
import './DatePicker.scss';

const DatePicker = forwardRef((props, ref) => {
  const { value, onChange, ...calendarProps } = props;
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  const [date, setDate] = useState(value);

  const handleDateChange = (e) => {
    setDate(e);
    setIsShowDatePicker(false);

    if (onChange) {
      return onChange(e);
    }
  };

  return (
    <div className="date-picker">
      <InputGroup
        suffix={<CalendarIcon />}
        type="text"
        value={formatDate(date)}
        onChange={(e) => e.preventDefault()}
        readOnly
        ref={ref}
        onClick={() => setIsShowDatePicker(!isShowDatePicker)}
      />

      {isShowDatePicker && (
        <div className="date-picker__calendar-wrapper">
          <Calendar
            {...calendarProps}
            value={date}
            onChange={handleDateChange}
          />
        </div>
      )}
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

DatePicker.defaultProps = {
  value: new Date(),
};

DatePicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default DatePicker;
