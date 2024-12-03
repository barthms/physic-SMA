import React from 'react';
import gm1 from '../assets/gm1.png';
import gm2 from '../assets/gm2.png';
import gm3 from '../assets/gm3.jpg';
import gm4 from '../assets/gm4.png';

function GerakMelingkar() {
  return (
    <div className="container mt-5">
      <div className="header text-center mb-4">
        <h1 className="title animate-title">Gerak Melingkar</h1>
        <h3 className="subtitle animate-subtitle">Gerak benda yang lintasannya berupa lingkaran yang mengelilingi suatu titik tetap</h3>
      </div>

      <div className="content">
        <section className="card shadow p-4 mb-4 animate-section">
          <h2 className="section-title">Pengertian Gerak Melingkar</h2>
          <p>
            Gerak melingkar adalah gerak suatu benda yang lintasannya berupa lingkaran yang mengelilingi suatu titik tetap.
            Contohnya adalah gerakan Bulan mengelilingi Bumi.
          </p>
        </section>

        <section className="card shadow p-4 mb-4 animate-section">
          <h2 className="section-title">Frekuensi dan Periode</h2>
          <p><b>Frekuensi (f):</b> Banyaknya putaran yang dilakukan dalam satu detik.</p>
          <p><b>Periode (T): </b>waktu yang dibutuhkan objek untuk menyelesaikan satu putaran penuh.</p>
          <img src={gm1} alt="konsep gm1" style={{ width: '150px', height: 'auto' }} />
          <ul>
            <li><b>n = </b>banyak putaran</li>
            <li><b>t = </b>waktu (s)</li>
            <li><b>1 putaran = </b>2π rad (radian)</li>
            <li><b>1 rpm (rotasi per menit) = </b>π/15</li>
          </ul>
          <p>Periode dan frekuensi dihubungkan dengan persamaan:</p>
          <img src={gm2} alt="konsep gm2" style={{ width: '150px', height: 'auto' }} />
        </section>

        <section className="card shadow p-4 mb-4 animate-section">
          <h2 className="section-title">Kecepatan dan Percepatan Gerak Melingkar</h2>
          <p>
            Pada gerak melingkar, kecepatan linier dan percepatan selalu menggunakan persamaan kecepatan sudut dan percepatan sudut.
            Kecepatan linear (v) dan kecepatan sudut (ω) dihubungkan dengan persamaan:
          </p>
          <img src={gm3} alt="konsep gm3" style={{ width: '150px', height: 'auto' }} />
          <img src={gm4} alt="konsep gm4" style={{ width: '150px', height: 'auto' }} />
          <ul>
            <li><b>v = </b>kecepatan linear (m/s)</li>
            <li><b>r = </b>jari-jari lintasan (m)</li>
            <li><b>ω = </b>kecepatan sudut (rad/s)</li>
            <li><b>f = </b>frekuensi (Hz)</li>
            <li><b>T = </b>periode (detik)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default GerakMelingkar;
