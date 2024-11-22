import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Fluida.css";

const Fluida = () => {
  const [depth, setDepth] = useState([0, 5, 10, 15, 20]);
  const [pressure, setPressure] = useState([0, 49000, 98000, 147000, 196000]);

  // Mengubah data berdasarkan kedalaman baru
  const updateData = (newDepth) => {
    const newPressure = newDepth.map(d => 9800 * d); // Tekanan = ρgh (dengan ρ=1000 kg/m³, g=9.8 m/s²)
    setDepth(newDepth);
    setPressure(newPressure);
  };

  // Data untuk grafik
  const data = {
    labels: depth, // Kedalaman dalam meter
    datasets: [
      {
        label: "Tekanan (Pa)",
        data: pressure, // Tekanan pada kedalaman
        borderColor: "rgba(34, 193, 195, 1)", // Warna garis yang lebih keren
        backgroundColor: "rgba(34, 193, 195, 0.2)",
        tension: 0.4,
        pointRadius: 5, // Membuat titik lebih besar di grafik
        pointHoverRadius: 7, // Membuat titik lebih besar ketika di hover
      },
    ],
  };

  // Opsi konfigurasi grafik
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Kedalaman (m)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Tekanan (Pa)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="fluida-container">
      <header className="fluida-header">
        <h1>Fluida Statis</h1>
        <p>
          Pelajari konsep dan penerapan fluida statis dengan grafik interaktif dan penjelasan rinci.
        </p>
      </header>

      <section className="fluida-content">
        <h2>Apa Itu Fluida Statis?</h2>
        <p>
          Fluida statis adalah cabang ilmu fisika yang mempelajari sifat dan perilaku fluida yang berada dalam kondisi diam atau tidak bergerak. Salah satu konsep utama dalam fluida statis adalah tekanan yang terjadi akibat berat fluida itu sendiri.
        </p>

        <h3>Rumus Tekanan Hidrostatis</h3>
        <p>
          Tekanan dalam fluida statis dapat dihitung dengan rumus:
        </p>
        <p>
          \( P = \rho \cdot g \cdot h \)
        </p>
        <ul>
          <li><strong>P:</strong> Tekanan (Pa)</li>
          <li><strong>ρ:</strong> Massa jenis fluida (kg/m³)</li>
          <li><strong>g:</strong> Percepatan gravitasi (9.8 m/s²)</li>
          <li><strong>h:</strong> Kedalaman (m)</li>
        </ul>

        <h3>Grafik Tekanan vs Kedalaman</h3>
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>

        <div className="depth-control">
          <label>Kedalaman (m): </label>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            value={depth[depth.length - 1]}
            onChange={(e) => updateData([...depth, parseInt(e.target.value)])}
          />
        </div>

        <h3>Hukum-Hukum Fluida Statis</h3>
        <p>Berikut adalah beberapa hukum dasar dalam fluida statis:</p>
        
        <h4>1. Hukum Pascal</h4>
        <p>
          Hukum Pascal menyatakan bahwa tekanan yang diberikan pada suatu fluida dalam ruang tertutup akan diteruskan secara merata ke segala arah.
        </p>
        <h5>Contoh Penerapan Hukum Pascal:</h5>
        <p>
          Pada sistem hidrolik, seperti pada rem mobil, fluida dalam pipa mengalir dan memberikan gaya yang cukup besar dengan menggunakan prinsip hukum Pascal. 
        </p>
        <p>
          Misalnya, pada rem hidrolik, tekanan kecil yang diberikan pada pedal rem akan menghasilkan tekanan besar pada kampas rem, memungkinkan mobil untuk berhenti dengan cepat.
        </p>

        <h4>2. Hukum Archimedes</h4>
        <p>
          Hukum Archimedes menyatakan bahwa setiap benda yang tercelup dalam fluida akan mengalami gaya angkat yang besarnya sama dengan berat fluida yang dipindahkan oleh benda tersebut.
        </p>
        <h5>Contoh Penerapan Hukum Archimedes:</h5>
        <p>
          Prinsip ini digunakan dalam perhitungan daya angkat kapal. Misalnya, kapal yang mengapung di laut, meskipun sangat besar, tidak tenggelam karena gaya angkat dari air lebih besar atau sama dengan berat kapal.
        </p>
        <p>
          Sebagai contoh, jika sebuah kapal berbobot 100 ton diletakkan di atas air, air akan memberikan gaya angkat 100 ton, membuat kapal tetap mengapung.
        </p>

        <h4>3. Hukum Stevin</h4>
        <p>
          Hukum Stevin menyatakan bahwa tekanan dalam fluida statis meningkat sebanding dengan kedalaman dan massa jenis fluida, tetapi tidak bergantung pada bentuk wadah fluida tersebut.
        </p>
        <h5>Contoh Penerapan Hukum Stevin:</h5>
        <p>
          Hukum ini digunakan dalam perhitungan tekanan pada kedalaman laut. Misalnya, di laut dalam, tekanan bisa mencapai ratusan ribu pascal karena kedalamannya yang sangat besar, meskipun bentuk wadah (laut) tidak mengubah tekanan tersebut.
        </p>
        <p>
          Sebagai contoh, pada kedalaman 1000 meter di laut, tekanan yang dialami adalah sekitar 10 MPa, yang setara dengan 100 atmosfer.
        </p>

        <h3>Contoh Penerapan Fluida Statis dalam Kehidupan Sehari-Hari</h3>
        <ul>
          <li><strong>Tekanan dalam air:</strong> Ketika kita menyelam ke dalam kolam atau laut, tekanan akan meningkat seiring dengan kedalaman kita.</li>
          <li><strong>Pengukuran tekanan darah:</strong> Pada pengukuran tekanan darah, alat seperti sphygmomanometer mengukur tekanan darah dalam tubuh, yang berhubungan dengan prinsip fluida statis.</li>
          <li><strong>Gaya angkat kapal:</strong> Prinsip Archimedes digunakan untuk menghitung gaya angkat yang memungkinkan kapal terapung di air.</li>
        </ul>
      </section>
    </div>
  );
};

export default Fluida;
