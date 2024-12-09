import React from 'react';
import '../styling/GerakVertikalAtas.css';

function GerakVertikalAtas() {
  return (
    <div className="container mt-5">
      <div className="header text-center mb-4">
        <h1 className="title animate-title">Gerak Vertikal ke Atas (GVA)</h1>
        <h3 className="subtitle animate-subtitle">Konsep, Rumus, dan Ciri-Ciri</h3>
      </div>

      <div className="content">
        <section className="card shadow p-4 mb-4 animate-section">
          <h2 className="section-title">Pengertian</h2>
          <p>
            Gerak Vertikal ke Atas atau GVA adalah gerak lurus berubah beraturan dalam arah vertikal (bawah ke atas)
            dengan kecepatan awal tertentu serta mengalami perlambatan sebesar percepatan gravitasi bumi (a = -g).
          </p>
        </section>

        <section className="card shadow p-4 mb-4 animate-section">
          <h2 className="section-title">Ciri-Ciri Gerak Vertikal ke Atas</h2>
          <ul>
            <li>Benda bergerak dari bawah ke atas dengan permukaan tanah sebagai titik acuan.</li>
            <li>Lintasan gerak benda berupa garis lurus vertikal.</li>
            <li>Perpindahan benda terjadi pada sumbu Y (arah vertikal).</li>
            <li>Memiliki kecepatan awal (v<sub>0</sub> ≠ 0).</li>
            <li>Kecepatan benda semakin lama semakin menurun secara teratur.</li>
            <li>Kecepatan benda pada titik tertinggi sama dengan nol.</li>
            <li>Benda mengalami perlambatan (a = -g).</li>
          </ul>
        </section>

        <section className="card shadow p-4 mb-4 animate-section">
          <h2 className="section-title">Rumus-Rumus</h2>
          <ul>
            <li>Kecepatan setelah t detik: <code>v<sub>t</sub> = v<sub>0</sub> - g.t</code></li>
            <li>Perpindahan atau ketinggian: <code>h = v<sub>0</sub>t - ½ g.t²</code></li>
            <li>Ketinggian maksimum: <code>h<sub>max</sub> = v<sub>0</sub>² / 2g</code></li>
            <li>Waktu mencapai titik tertinggi: <code>t<sub>max</sub> = v<sub>0</sub> / g</code></li>
          </ul>
        </section>

        <section className="card shadow p-4 mb-4 animate-section">
          <h2 className="section-title">Penjelasan Rumus</h2>
          <p>
            Dalam gerak vertikal ke atas, percepatan gravitasi bumi menyebabkan benda mengalami perlambatan.
            Besarnya perlambatan sama dengan nilai percepatan gravitasi bumi (a = -g).
          </p>
        </section>
      </div>
    </div>
  );
}

export default GerakVertikalAtas;
