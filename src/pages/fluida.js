import React from "react";
import { Line } from "react-chartjs-2";
import "./Fluida.css";

const Fluida = () => {
  // Data untuk grafik
  const pressureData = {
    labels: ["0 m", "5 m", "10 m", "15 m", "20 m"],
    datasets: [
      {
        label: "Tekanan (Pascals)",
        data: [0, 49000, 98000, 147000, 196000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Tekanan (Pa)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Kedalaman (m)",
        },
      },
    },
  };

  return (
    <div className="fluida-container">
      {/* Header */}
      <header className="fluida-header">
        <h1>Fluida Statis</h1>
        <p>Belajar konsep Fluida Statis dengan visualisasi interaktif dan contoh soal.</p>
      </header>

      {/* Konten Utama */}
      <section className="fluida-content">
        <h2>Apa Itu Fluida Statis?</h2>
        <p>
          Fluida statis adalah fluida yang berada dalam keadaan diam. Pada kondisi ini, tekanan di dalam fluida
          bergantung pada kedalaman dan massa jenis fluida.
        </p>

        <h3>Rumus Utama</h3>
        <ul>
          <li>
            <strong>Tekanan Hidrostatis:</strong> \( P = \rho \cdot g \cdot h \)
            <ul>
              <li><strong>P:</strong> Tekanan (Pa)</li>
              <li><strong>ρ:</strong> Massa jenis fluida (kg/m³)</li>
              <li><strong>g:</strong> Percepatan gravitasi (m/s²)</li>
              <li><strong>h:</strong> Kedalaman (m)</li>
            </ul>
          </li>
        </ul>

        <h3>Grafik Tekanan vs Kedalaman</h3>
        <div className="chart-container">
          <Line data={pressureData} options={options} />
        </div>

        <h3>Contoh Soal</h3>
        <div className="example-box">
          <p><strong>Soal:</strong> Sebuah fluida memiliki massa jenis 1000 kg/m³. Hitung tekanan pada kedalaman 10 meter!</p>
          <p>
            <strong>Jawab:</strong><br />
            Diketahui: <br />
            ρ = 1000 kg/m³, g = 9.8 m/s², h = 10 m<br />
            Tekanan: \( P = \rho \cdot g \cdot h = 1000 \cdot 9.8 \cdot 10 = 98000 \, \text{Pa} \).
          </p>
        </div>
      </section>
    </div>
  );
};

export default Fluida;
