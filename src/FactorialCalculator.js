import React, { useState } from 'react';

function FactorialCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [factorial, setFactorial] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const calculateFactorial = (num) => {
    if (num < 0) return 'Factorial is not defined for negative numbers';
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(inputValue, 10);
    if (isNaN(num) || num < 0) {
      setFactorial('Please enter a valid positive number');
    } else {
      const result = calculateFactorial(num);
      setFactorial(result);
    }
  };

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a number"
          />
        </label>
        <button type="submit">Calculate Factorial</button>
      </form>

      {factorial !== null && (
        <div>
          <h3>Factorial: {factorial}</h3>
        </div>
      )}

    </div>
  );
}

export default FactorialCalculator;
