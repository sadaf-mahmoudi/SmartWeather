import React from "react";

const WeatherMapPage = () => {
  return (
    <div className="container">
      <h1>Väderkarta</h1>
      <iframe
        title="Windy Map"
        src="https://embed.windy.com/embed2.html?lat=50.4&lon=14.3&zoom=5&level=surface&overlay=wind&menu=&message=&marker=&calendar="
        width="100%"
        height="500"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default WeatherMapPage;