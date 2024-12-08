import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../styling/fluidadns.css';
import Dinamis from '../assets/Dinamis.jpg';
import Fluid from '../assets/konsepDinamis.jpg';

const FluidaDinamis = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fluid-bg text-dark">
      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="display-3 fw-bold text-primary">Fluida Dinamis</h1>
          <p className="lead text-secondary">
            Fluida Dinamis adalah cabang fisika yang mempelajari sifat dan perilaku fluida (baik cair maupun gas) yang bergerak. 
            Ilmu ini sangat penting dalam memahami fenomena alam dan berbagai aplikasi teknik, seperti aerodinamika, hidrodinamika, meteorologi, dan teknik mesin.
          </p>
          
        </header>

        <section id="konsep" className="mb-5">
          <h2 className="fw-bold mb-4 text-secondary">🌊 Konsep Utama Fluida Dinamis</h2>
          <div className="row">
            <div className="col-md-6">
              <h4 className="fw-bold">Aliran Fluida</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent">
                  <strong>Aliran Laminar:</strong> Aliran yang tenang dan teratur. Partikel fluida bergerak dalam garis paralel tanpa bercampur.
                </li>
                <li className="list-group-item bg-transparent">
                  <strong>Aliran Turbulen:</strong> Aliran yang kacau dan tidak teratur, biasanya terjadi pada kecepatan tinggi.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">Kecepatan Aliran</h4>
              <p>
                Kecepatan fluida berbeda di setiap titik dalam aliran. Profil kecepatan biasanya lebih besar di tengah pipa dibandingkan di
                dekat dinding karena gaya gesekan.
              </p>
            </div>
          </div>
        </section>

        <section id="hukum" className="mb-5">
          <h2 className="fw-bold mb-4 text-secondary">📚 Hukum dan Prinsip Penting</h2>
          <div className="row">
            <div className="col-md-4">
              <h5 className="fw-bold">🔗 Persamaan Kontinuitas</h5>
              <p>
                Prinsip kekekalan massa: Debit aliran (laju aliran massa) di setiap titik dalam sistem tetap sama.
              </p>
              <pre className="bg-light text-primary p-3 rounded">
                A₁v₁ = A₂v₂
              </pre>
              <p>
                Di mana: <strong>A</strong> adalah luas penampang, dan <strong>v</strong> adalah kecepatan aliran fluida.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold">⚖️ Hukum Bernoulli</h5>
              <p>
                Dalam aliran fluida ideal (tanpa gesekan), energi total (tekanan, kinetik, dan potensial) tetap konstan.
              </p>
              <pre className="bg-light text-primary p-3 rounded">
                P + ½ρv² + ρgh = konstan
              </pre>
              <p>
                Di mana: <strong>P</strong>: Tekanan fluida, <strong>ρ</strong>: Densitas fluida, <strong>v</strong>: Kecepatan fluida, <strong>g</strong>: Percepatan gravitasi, <strong>h</strong>: Ketinggian.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold">🌐 Persamaan Navier-Stokes</h5>
              <p>
                Persamaan kompleks yang menjelaskan aliran fluida dengan mempertimbangkan viskositas (gesekan internal).
              </p>
            </div>
          </div>
        </section>

        <section id="visualisasi" className="mb-5">
          <h2 className="fw-bold mb-4 text-secondary">📸 Visualisasi Fluida</h2>
          <Carousel className="shadow-sm">
            <Carousel.Item>
              <img className="d-block w-100 rounded" src={Dinamis} alt="Fluida Dinamis" />
              <Carousel.Caption>
                <h5>Gambar 1: Gerakan Fluida Dinamis</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded" src={Fluid} alt="Contoh Fluida" />
              <Carousel.Caption>
                <h5>Gambar 2: Contoh Penerapan</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default FluidaDinamis;
