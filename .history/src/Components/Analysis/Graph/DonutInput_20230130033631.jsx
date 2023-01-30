const DonutInput = ({ inputValue, handleChange, text }) => {
  return (
    <input value={inputValue} onChange={handleChange} placeholder={text} />
  );
};

export default DonutInput;
