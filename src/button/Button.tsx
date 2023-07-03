import React from "react";
import "./Button.css";

const Button = ({ isSubmit, label }: { isSubmit: boolean; label: string }) => (
  <button type={isSubmit ? "submit" : "button"} className="button">
    {label}
  </button>
);

export default Button;
