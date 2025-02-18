// src/pages/WeatherMapPage.jsx
import React from "react";

const WeatherMapPage = () => {
  return (
    <div className="map-page">
      {/* Stor, bred iframe som tidigare */}
      <iframe
        title="WindyMap"
        src="https://embed.windy.com/embed2.html?lat=50.4&lon=14.3&zoom=5&level=surface&overlay=wind&menu=&message=&marker=&calendar="
        className="weather-map"
      ></iframe>
    </div>
  );
};

export default WeatherMapPage;
