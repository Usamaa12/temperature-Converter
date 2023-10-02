



import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const convertTemperature = () => {
    // TODO: Write the temperature conversion logic here

    // Conversion formulas:
    // Celsius to Fahrenheit: (temperature * 9/5) + 32
    // Fahrenheit to Celsius: (temperature - 32) * 5/9

    // TODO: Implement the conversion logic based on the selected unit

    // TODO: Update the state with the converted temperature
  };

  return (
    <div>
      {/* TODO: Write the JSX structure for the temperature converter form */}

      {/* TODO: Add the necessary input fields and event handlers */}

      {/* TODO: Include a button to trigger the temperature conversion */}
      
      {/* TODO: Display the converted temperature */}
      
      {/* TODO: Allow students to add their own customizations */}
    </div>
  );
};

export default TemperatureConverter;
