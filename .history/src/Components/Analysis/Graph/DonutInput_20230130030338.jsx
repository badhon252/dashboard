const DonutInput = ({ inputValue, handleChange }) => {
  return (
    <input
      value={inputValue}
      onChange={handleChange}
      placeholder="Command & Control Host"
    />
  );
};

export default DonutInput;
