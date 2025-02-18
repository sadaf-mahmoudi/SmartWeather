// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherMapPage from "./pages/WeatherMapPage";
import ForecastPage from "./pages/ForecastPage";
import "./index.css"; 

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <button onClick={() => navigate("/")} className="nav-button">Hem</button>
      <button onClick={() => navigate("/map")} className="nav-button">Väderkarta</button>
      <button onClick={() => navigate("/forecast")} className="nav-button">5-dagars Prognos</button>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      © SmartWeather 2025 | Kontakt: <a href="mailto:info@smartweather.com">info@smartweather.com</a>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<WeatherMapPage />} />
          <Route path="/forecast" element={<ForecastPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
