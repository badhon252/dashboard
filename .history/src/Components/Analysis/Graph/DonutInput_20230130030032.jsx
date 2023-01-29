import React from "react";

const DonutInput = ({ inputValue, handleChange }) => {
  return (
    <div>
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="Command & Control Host"
      />
    </div>
  );
};

export default DonutInput;
