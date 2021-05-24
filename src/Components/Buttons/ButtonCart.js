import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const ButtonCart = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <Link to="/cart" className="btn-mobile w20">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize} w-100 rounded`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    </>
  );
};
