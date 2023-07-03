import React from 'react';
import defaultProps from './defaultProps';
import InputType from './enums';
import './MainDateTimeInput.css';
import { DateTimeInputProps } from './types';

const DateTimeInput = ({
  id,
  minDate,
  maxDate,
  maxTime,
  minTime,
  required,
  valueDate,
  valueTime,
  handleChangeDate,
  handleChangeTime,
}: DateTimeInputProps) => (
  <div className="inputDateAndTime">
    <input
      className="inputDateOrTime"
      type={InputType.DATE}
      id={id}
      min={minDate}
      max={maxDate}
      required={required}
      pattern="\d{4}-\d{2}-\d{2}"
      value={valueDate}
      onChange={(e) => handleChangeDate && handleChangeDate(e.target.value)}
    />
    <input
      className="inputDateOrTime"
      type={InputType.TIME}
      id={id}
      min={minTime}
      max={maxTime}
      required={required}
      pattern="\d{2}:\d{2}"
      value={valueTime}
      onChange={(e) => handleChangeTime && handleChangeTime(e.target.value)}
    />
  </div>
);

DateTimeInput.defaultProps = defaultProps;

export default DateTimeInput;
