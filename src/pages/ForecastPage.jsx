// src/pages/ForecastPage.jsx
import React, { useState } from "react";

const ForecastPage = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchForecast = async () => {
    if (!city) return;
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
    const apiKey = "1a7b42a66822e265cd7429a1e973f8b2"; 
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${formattedCity}&units=metric&appid=${apiKey}&lang=sv`
      );
      if (!response.ok) {
        const errData = await response.json();
        setErrorMsg(errData.message || "Något gick fel.");
        setForecast(null);
        return;
      }
      const data = await response.json();
      setForecast(data);
      setErrorMsg("");
    } catch (error) {
      console.error("Fel vid hämtning av prognosdata:", error);
      setErrorMsg("Fel vid hämtning av prognosdata.");
      setForecast(null);
    }
  };

  return (
    <div className="forecast-page">
      <div className="search-container">
        <h1>5-dagars Prognos</h1>
        <input
          type="text"
          placeholder="Skriv in en stad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchForecast}>Sök Prognos</button>
        {errorMsg && <p className="error-message">{errorMsg}</p>}
      </div>
      {forecast && (
        <div className="forecast-container">
          {forecast.list
            .filter((_, index) => index % 8 === 0)
            .map((item, index) => (
              <div key={index} className="forecast-card">
                <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description}
                />
                <p>Temp: {Math.round(item.main.temp)}°C</p>
                <p>{item.weather[0].description}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ForecastPage;
