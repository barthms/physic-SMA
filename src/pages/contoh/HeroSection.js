import React from "react";
import { Link } from "react-router-dom";
import "../../styling/beranda.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="container hero-content text-center text-white">
      <div className="JudulPage">
        <h1 data-aos="fade-down" data-aos-duration="1000">
          Fisik(Fisika Asik)
        </h1>
        <h2 data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
          Belajar Fisika Jadi Menyenangkan
        </h2>
      </div>
        <p
          className="mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Selamat datang di portal pembelajaran Fisika SMA Kelas 10. Mari bersama-sama
          menjelajahi dunia fisika dengan cara yang menarik dan mudah dipahami.
          Temukan berbagai materi, latihan soal, dan eksperimen seru!
        </p>
        <Link
          className="btn btn-primary mt-4"
          to={"/pages/Hooke"}
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Mulai Belajar
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
