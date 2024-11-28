import React from "react";
import "../styling/beranda.css";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpeg";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="container hero-content text-center text-white">

          <h1>Fisika SMA Kelas 10</h1>
          <h2>Belajar Fisika Jadi Menyenangkan</h2>
          <p className="mt-4">
            Selamat datang di portal pembelajaran Fisika SMA Kelas 10. Mari bersama-sama
            menjelajahi dunia fisika dengan cara yang menarik dan mudah dipahami.
            Temukan berbagai materi, latihan soal, dan eksperimen seru!
          </p>

          <Link className="btn btn-primary mt-4" to={'/pages/Hooke'}>Mulai Belajar</Link>
        </div>
      </section>

      {/* Section 2 */}
      <div className="container mt-5">

        <h3 className="text-center mb-4">Keunggulan Pembelajaran Kami</h3>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <div className="feature-box p-4">

              <i className="fas fa-book fa-3x mb-3"></i>
              <h4>Materi Lengkap</h4>
              <p>Mencakup seluruh materi Fisika kelas 10 sesuai kurikulum terbaru</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box p-4">

              <i className="fas fa-flask fa-3x mb-3"></i>
              <h4>Eksperimen Virtual</h4>
              <p>Simulasi interaktif untuk memahami konsep fisika dengan lebih baik</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box p-4">

              <i className="fas fa-tasks fa-3x mb-3"></i>
              <h4>Latihan Soal</h4>
              <p>Bank soal lengkap dengan pembahasan detail</p>
            </div>
          </div>
        </div>
      </div>

      {/* BerandaBawah Components */}
      <div className="container mb-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src={foto3}

              alt="Materi Pembelajaran"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">

            <h4>Materi Pembelajaran</h4>
            <p>

              Pelajari konsep dasar fisika dengan metode yang sistematis dan mudah dipahami.
              Dilengkapi dengan contoh penerapan dalam kehidupan sehari-hari.
            </p>
            <ul className="list-unstyled">

              <li><i className="fas fa-check text-success"></i> Besaran dan Satuan</li>
              <li><i className="fas fa-check text-success"></i> Vektor</li>
              <li><i className="fas fa-check text-success"></i> Gerak Lurus</li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">

            <h4>Metode Pembelajaran</h4>
            <p>

              Berbagai metode pembelajaran yang efektif untuk memahami fisika:
            </p>
            <ul className="list-unstyled">

              <li><i className="fas fa-star text-warning"></i> Video Pembelajaran</li>
              <li><i className="fas fa-star text-warning"></i> Praktikum Virtual</li>
              <li><i className="fas fa-star text-warning"></i> Diskusi Interaktif</li>
              <li><i className="fas fa-star text-warning"></i> Quiz Online</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src={foto4}

              alt="Metode Pembelajaran"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-fluid bg-light py-5">
        <div className="container">

          <h3 className="text-center mb-4">Testimoni Siswa</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="card testimonial-card p-3 mb-3">
                <div className="card-body">


                  <p className="card-text">"Materi yang dijelaskan sangat mudah dipahami. Saya jadi semakin suka belajar fisika!"</p>
                  <footer className="blockquote-footer">Andi dari SMAN 1</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card testimonial-card p-3 mb-3">
                <div className="card-body">


                  <p className="card-text">"Simulasi virtualnya sangat membantu dalam memahami konsep yang abstrak."</p>
                  <footer className="blockquote-footer">Budi dari SMAN 2</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card testimonial-card p-3 mb-3">
                <div className="card-body">


                  <p className="card-text">"Latihan soalnya lengkap dan pembahasan sangat detail. Sangat membantu persiapan ujian!"</p>
                  <footer className="blockquote-footer">Citra dari SMAN 3</footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;