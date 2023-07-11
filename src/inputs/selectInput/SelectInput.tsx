import style from "./SelectInput.module.css";

const defaultProps = {
  required: false,
  label: undefined,
  width: "250px",
  value: "",
  handleChange: () => undefined,
};

/**
 * Show button
 * @param {string} id
 * @param {string} label
 * @param {boolean} required
 * @param {string[]} options
 * @param {string} width
 * @param {string} value
 * @param {(value: string) => void} handleChange
 * @returns {JSX.Element} JSX.Element
 */

const SelectInput = ({
  id,
  label,
  options,
  required,
  width,
  handleChange,
  value,
}: {
  id: string;
  label?: string;
  options: string[];
  required?: boolean;
  width?: string;
  value?: string;
  handleChange?: (value: string) => void;
}) => (
  <div className={style.selectInput}>
    <label className={style.label} htmlFor={id}>
      {label}
    </label>
    <select
      name={id}
      id={id}
      required={required}
      style={{ width }}
      onChange={(e) => handleChange && handleChange(e.target.value)}
      value={value}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

SelectInput.defaultProps = defaultProps;

export default SelectInput;
