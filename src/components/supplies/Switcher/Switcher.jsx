import React from "react";
import "./Switcher.css";
import cx from "classnames";
const Switcher = ({ rounded = false, isToggled, onToggle }) => {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });

  return (
    <label className="switch">
      <input type={"checkbox"} checked={isToggled} onChange={onToggle} />
      <span className={sliderCX}></span>
    </label>
  );
};
export default Switcher;
