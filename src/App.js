import React, { useState } from 'react';
import './TemperatureConverter.css';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== '' ? ((parseFloat(value) * 9) / 5 + 32).toFixed(2) : '');
    setKelvin(value !== '' ? (parseFloat(value) + 273.15).toFixed(2) : '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== '' ? (((parseFloat(value) - 32) * 5) / 9).toFixed(2) : '');
    setKelvin(value !== '' ? ((((parseFloat(value) - 32) * 5) / 9) + 273.15).toFixed(2) : '');
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    setKelvin(value);
    setCelsius(value !== '' ? (parseFloat(value) - 273.15).toFixed(2) : '');
    setFahrenheit(value !== '' ? (((parseFloat(value) - 273.15) * 9) / 5 + 32).toFixed(2) : '');
  };

  return (
    <div className="temperature-converter">
      <h2>Temperature Converter</h2>
      <div className="input-container">
        <label>Celsius:</label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </div>
      <div className="input-container">
        <label>Fahrenheit:</label>
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>
      <div className="input-container">
        <label>Kelvin:</label>
        <input type="number" value={kelvin} onChange={handleKelvinChange} />
      </div>
    </div>
  );
}

export default TemperatureConverter;
