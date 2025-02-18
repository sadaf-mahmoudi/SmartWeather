// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© SmartWeather 2025 | Kontakt: <a href="mailto:info@smartweather.com">info@smartweather.com</a></p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#005f73",
    color: "white",
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;
