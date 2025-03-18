import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import './index.css'; 

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Конвертация из Цельсия в Фаренгейт
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
    }
  };

  // Конвертация из Фаренгейта в Цельсия
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
    }
  };

  return (
    <div className="temperature-converter">
  <Typography variant="h5" align="center" gutterBottom>
    Температурный конвертер
  </Typography>
  <TextField
    label="Градусы Цельсия"
    variant="outlined"
    fullWidth
    value={celsius}
    onChange={handleCelsiusChange}
    sx={{ mb: 2 }}
  />
  <TextField
    label="Градусы Фаренгейта"
    variant="outlined"
    fullWidth
    value={fahrenheit}
    onChange={handleFahrenheitChange}
  />
</div>
  );
};

export default TemperatureConverter;