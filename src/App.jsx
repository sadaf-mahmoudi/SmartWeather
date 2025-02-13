import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherMapPage from "./pages/WeatherMapPage";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <button onClick={() => navigate("/")} className="nav-button">Hem</button>
      <button onClick={() => navigate("/map")} className="nav-button">Väderkarta</button>
    </div>
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;