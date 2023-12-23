import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [inputTemperature, setInputTemperature] = useState('')
  const [kelvin, setKelvin] = useState('')
  const [celsius, setCelsius] = useState('')

  const handleInputChange = (e) => {
    const temperature = e.target.value
    setInputTemperature(temperature)

    // Kelvin ve Celsius dönüşümleri
    const kelvinValue = parseFloat(temperature) + 273.15;
    setKelvin(kelvinValue.toFixed(2))

    const celsiusValue = parseFloat(temperature);
    setCelsius(celsiusValue.toFixed(2))
  };

  return (
    <main class="container">
    <div>
    
      <h1 className='header'>SICAKLIK DÖNÜŞTÜRÜCÜ</h1>
      <label className='black'>Sıcaklık Girin:</label>
      <input  className='input'
        type="number"
        value={inputTemperature}
        onChange={handleInputChange}
        placeholder="Sıcaklık"
      />
      <p className='black'>Kelvin: {kelvin} K</p>
      <p className='black'>Celsius: {celsius} °C</p>
    </div>
    </main>
  )
}

export default TemperatureConverter;

