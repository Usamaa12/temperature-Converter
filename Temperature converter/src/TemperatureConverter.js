import React, { useState } from 'react';
import './TemCon.css';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const convertTemperature = () => {
    if (unit === 'Celsius') {
      const convertedTemp = (parseFloat(temperature) * 9) / 5 + 32;
      setConvertedTemperature(convertedTemp.toFixed(2) + ' °F');
    } else if (unit === 'Fahrenheit') {
      const convertedTemp = ((parseFloat(temperature) - 32) * 5) / 9;
      setConvertedTemperature(convertedTemp.toFixed(2) + ' °C');
    }
  };

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <div className="converter">
      <h2>Temperature Converter</h2>
      <div className="form">
   
        <input 
        value={temperature}
          onChange={handleTemperatureChange}
          placeholder=""
        />
        <select value={unit} onChange={handleUnitChange}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
        <button onClick={convertTemperature}>Convert</button>
      </div>
      {convertedTemperature && (
        <div className="result">
        {/* <p> Result</p> */}
          Result: {convertedTemperature}
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;
