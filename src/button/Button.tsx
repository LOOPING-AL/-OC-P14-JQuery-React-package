import style from "./Button.module.css";

/**
 * Show button
 * @param {boolean} isSubmit
 * @param {string} label
 * @returns {JSX.Element} JSX.Element
 */
const Button = ({ isSubmit, label }: { isSubmit: boolean; label: string }) => (
  <button type={isSubmit ? "submit" : "button"} className={style.button}>
    {label}
  </button>
);

export default Button;
