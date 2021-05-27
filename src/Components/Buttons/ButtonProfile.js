import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const ButtonProfile = ({
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
      <Link to="/profile" className="btn-mobile w-25 rounded mr-2 ">
        <button
          className={`btns ${checkButtonStyle} ${checkButtonSize} w-100 rounded lower-padding`}
          onClick={onClick}
          type={type}
        >
          <i className="fas fa-user"></i> {children}
        </button>
      </Link>
    </>
  );
};
