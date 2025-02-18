// src/pages/HomePage.jsx
import React, { useState } from "react";

const HomePage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
    const apiKey = "1a7b42a66822e265cd7429a1e973f8b2"; 
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&units=metric&appid=${apiKey}&lang=sv`
      );
      if (!response.ok) {
        const errData = await response.json();
        setErrorMsg(errData.message || "Något gick fel.");
        setWeather(null);
        return;
      }
      const data = await response.json();
      setWeather(data);
      setErrorMsg("");
    } catch (error) {
      console.error("Fel vid hämtning av väderdata:", error);
      setErrorMsg("Fel vid hämtning av väderdata.");
      setWeather(null);
    }
  };

  return (
    <div className="home-page">
      <div className="search-container">
        <h1>SmartWeather</h1>
        <input
          type="text"
          placeholder="Skriv in en stad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Sök</button>
        {errorMsg && <p className="error-message">{errorMsg}</p>}
        {weather && weather.cod === 200 && (
          <div className="weather-info">
            <h2>{weather.name}</h2>
            <p>Temperatur: {Math.round(weather.main.temp)}°C</p>
            <p>Väder: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
