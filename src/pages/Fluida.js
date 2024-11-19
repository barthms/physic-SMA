import React from 'react';
import './fluida.css';

const Fluida = () => {
  // Data konsep fluida statis
  const concepts = [
    {
      title: "Tekanan Hidrostatis",
      description:
        "Tekanan yang dialami oleh suatu benda di dalam fluida diam karena pengaruh berat fluida di atasnya.",
      formula: "P = ρgh",
      explanation:
        "Dimana: P = tekanan, ρ = massa jenis fluida, g = percepatan gravitasi, h = kedalaman."
    },
    {
      title: "Hukum Pascal",
      description:
        "Tekanan yang diberikan pada fluida dalam ruang tertutup diteruskan ke segala arah dengan besar yang sama.",
      formula: "F₁/A₁ = F₂/A₂",
      explanation:
        "Dimana: F = gaya, A = luas penampang. Prinsip ini digunakan pada dongkrak hidrolik."
    },
    {
      title: "Hukum Archimedes",
      description:
        "Benda yang dicelupkan sebagian atau seluruhnya ke dalam fluida akan mengalami gaya angkat ke atas sebesar berat fluida yang dipindahkan.",
      formula: "Fa = ρ × g × V",
      explanation:
        "Dimana: Fa = gaya angkat, ρ = massa jenis fluida, V = volume fluida yang dipindahkan."
    },
  ];

  return (
    <div className="fluida-container">
      <h1>Fluida Statis</h1>
      <p>
        Fluida statis membahas sifat-sifat fluida yang diam, seperti tekanan
        hidrostatis, hukum Pascal, dan hukum Archimedes.
      </p>
      <div className="concepts">
        {concepts.map((concept, index) => (
          <div key={index} className="concept-card">
            <h2>{concept.title}</h2>
            <p>{concept.description}</p>
            <h3>Rumus:</h3>
            <p>{concept.formula}</p>
            <h3>Penjelasan:</h3>
            <p>{concept.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fluida;
