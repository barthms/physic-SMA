import React from "react";
import "../../styling/heroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <header className="fisika-hero-section d-flex align-items-center">
      <div className="container text-center text-white fisika-hero-container">
        <h1 className="fisika-hero-title">Fisika Kelas 10</h1>
        <p className="fisika-hero-text mt-3">
          Belajar fisika dengan cara yang interaktif dan menyenangkan. Mari
          jelajahi dunia fisika bersama kami!
        </p>
        <h4 className="btn btn-success fisika-hero-button mt-4">
          <Link to='pages/Hooke' className="font">Mulai Belajar</Link>
        </h4>
      </div>
    </header>
  );
};

export default HeroSection;
