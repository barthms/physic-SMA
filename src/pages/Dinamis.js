import React, { useState } from 'react';
import '../styling/fluidadns.css';

const FluidaDinamis = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const toggleImage = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div className="fluid-dynamics-page">
      <header className="fluid-header">
        <h1>Fluida Dinamis</h1>
        <p>Fluida Dinamis adalah cabang ilmu mekanika fluida yang mempelajari gerakan fluida yang berada dalam keadaan aliran.</p>
      </header>

      <section className="fluid-content">
        <h2>Pengenalan Fluida Dinamis</h2>
        <p>
          Fluida dinamis berkaitan dengan analisis perilaku fluida yang bergerak, seperti aliran udara, air, dan gas. Hal ini mencakup
          pengukuran kecepatan aliran, tekanan, dan turbulensi, serta penerapan hukum-hukum fisika untuk menjelaskan aliran fluida.
        </p>

        <button className="toggle-image-btn" onClick={toggleImage}>
          {isImageVisible ? 'Sembunyikan Gambar' : 'Tampilkan Gambar'}
        </button>

        {isImageVisible && (
          <div className="fluid-image">
            <img
              src="https://via.placeholder.com/600x300.png?text=Gambar+Fluida+Dinamis"
              alt="Ilustrasi Fluida Dinamis"
            />
          </div>
        )}
      </section>

      <section className="fluid-formula">
        <h2>Formula dan Hukum Fluida Dinamis</h2>
        <p>
          Salah satu hukum utama dalam fluida dinamis adalah Hukum Bernoulli, yang menyatakan bahwa dalam aliran fluida yang ideal,
          total energi (energi tekanan, energi kinetik, dan energi potensial) tetap konstan di sepanjang aliran fluida.
        </p>
        <pre className="formula">
          P + ½ρv² + ρgh = constant
        </pre>
      </section>

      <footer className="fluid-footer">
        <p>© 2024 Ilmu Fluida Dinamis</p>
      </footer>
    </div>
  );
};

export default FluidaDinamis;
