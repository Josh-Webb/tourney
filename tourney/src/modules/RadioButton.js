import React from "react";

const Radio = ({ label, isSelected, onRadioChange }) => (
  <div className="form-check">
    <label>
      <input
        type="radio"
        name={label}
        checked={isSelected}
        onChange={onRadioChange}
        className="Radio"
      />
      {label}
    </label>
  </div>
);

export default Radio;
