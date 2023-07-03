import React from "react";
import defaultProps from "./defaultProps";
import InputType from "./enums";
import "./MainDateTimeInput.css";
import { TimeInputProps } from "./types";

const TimeInput = ({
  id,
  minTime,
  maxTime,
  required,
  valueTime,
  handleChangeTime,
}: TimeInputProps) => (
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
);

TimeInput.defaultProps = defaultProps;

export default TimeInput;
