import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Fluida.css";
import { Psychology } from "@mui/icons-material";
import { BlockMath } from "react-katex";
import pascal from "../assets/pascalh.png";
import archimedes from "../assets/rumus archimedes.png";
import stevin from "../assets/Stevin.png";

const Fluida = () => {
  const [depth, setDepth] = useState([0, 5, 10, 15, 20]);
  const [pressure, setPressure] = useState([0, 49000, 98000, 147000, 196000]);
  const [currentDepth, setCurrentDepth] = useState(20);
  const [previousDepth, setPreviousDepth] = useState(20);

  const updateData = (newDepth) => {
    const newPressure = newDepth.map((d) => 9800 * d); // Tekanan = ρgh
    setDepth(newDepth);
    setPressure(newPressure);
  };

  const handleSliderChange = (value) => {
    const newDepthArray = Array.from({ length: parseInt(value) + 1 }, (_, i) => i);

    setPreviousDepth(currentDepth); // Simpan kedalaman sebelumnya
    setCurrentDepth(parseInt(value));
    updateData(newDepthArray);
  };

  const data = {
    labels: depth,
    datasets: [
      {
        label: "Tekanan (Pa)",
        data: pressure,
        borderColor: "rgba(34, 193, 195, 1)",
        backgroundColor: "rgba(34, 193, 195, 0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

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
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #f6faff, #e9eef5)",
        borderRadius: "20px",
        boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.15)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-gradient" style={{ color: "#0d47a1" }}>
          <strong>Fluida Statis</strong>
        </h1>
        <p className="lead text-muted">
          Pelajari konsep dan penerapan fluida statis dengan interaktif.
        </p>
        <hr
          style={{
            border: "2px solid #1976d2",
            width: "50%",
            margin: "auto",
            borderRadius: "20px",
          }}
        />
      </header>

      {/* Content Section */}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <section className="mb-5">
            <h2
              className="text-primary d-flex align-items-center mb-4"
              style={{
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
                animation: "fadeIn 1s ease-in",
              }}
            >
              <Psychology className="me-2" /> <em>Apa Itu Fluida Statis?</em>
            </h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <p className="text-justify" style={{ lineHeight: "1.8", fontFamily: "'Poppins', sans-serif" }}>
                  Fluida statis merujuk kepada fluida yang berada dalam keadaan diam atau fase tidak bergerak, fluida yang
                  dalam kondisi bergerak tetapi dengan tidak ada perbedaan kecepatan antara partikel-partikelnya. Dengan
                  kata lain, partikel-partikel dalam fluida ini bergerak dengan kecepatan seragam dan tidak menyebabkan gaya
                  geser. Fluida dalam keadaan statis memiliki karakteristik di mana semua gaya yang bekerja padanya
                  seimbang, sehingga tidak ada gerakan relatif di dalam fluida tersebut.
                </p>
              </div>

              <div className="col-md-6 mb-4">
                <div
                  className="card p-3 shadow-lg"
                  style={{
                    background: "linear-gradient(180deg, #ffffff, #f1f9ff)",
                    borderRadius: "20px",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Line data={data} options={options} />
                </div>
                <div className="mt-4">
                  <label htmlFor="depth-slider" className="form-label fw-bold text-info fs-5">
                    Atur Kedalaman (m):
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="depth-slider"
                    min="0"
                    max="20"
                    step="1"
                    value={currentDepth}
                    onChange={(e) => handleSliderChange(e.target.value)}
                    style={{
                      background: "linear-gradient(to right, #2196f3, #00bcd4)",
                      borderRadius: "20px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
                <div className="mt-3 text-center text-dark">
                  <strong className="fs-5">Kedalaman yang dipilih: {currentDepth} meter</strong>
                  <p className="text-muted">
                    Perubahan kedalaman: {Math.abs(currentDepth - previousDepth)} meter
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Hukum */}
          <section className="mb-5">
            <h3 className="text-success">
              <strong>Rumus Tekanan Hidrostatis</strong>
            </h3>
            <p>
              Fluida statis dan tekanan hidrostatis memiliki hubungan yang sangat erat. Fluida statis mengacu pada fluida
              yang tidak bergerak atau dalam keadaan diam. Sedangkan tekanan hidrostatis adalah tekanan yang dialami oleh
              fluida yang berada dalam keadaan diam, akibat gaya yang diberikan oleh berat fluida itu sendiri.
            </p>
            <div className="mb-4">
              <BlockMath math="P = \rho \times g \times h" />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>P:</strong> Tekanan (Pa)
              </li>
              <li className="list-group-item">
                <strong>ρ:</strong> Massa jenis fluida (kg/m³)
              </li>
              <li className="list-group-item">
                <strong>g:</strong> Percepatan gravitasi (9.8 m/s²)
              </li>
              <li className="list-group-item">
                <strong>h:</strong> Kedalaman (m)
              </li>
            </ul>
          </section>

          {/* Section Hukum-Hukum Fluida Statis */}
          <section className="mb-5">
            <h3 className="text-warning">
              <strong>Hukum-Hukum Fluida Statis</strong>
            </h3>
            <div className="accordion" id="fluidaAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="pascalHeading">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pascal"
                    aria-expanded="true"
                    aria-controls="pascal"
                  >
                    <strong>Hukum Pascal</strong>
                  </button>
                </h2>
                <div id="pascal" className="accordion-collapse collapse show" data-bs-parent="#fluidaAccordion">
                  <div className="accordion-body">
                    <strong>Hukum Pascal</strong> menyatakan bahwa tekanan yang diberikan pada suatu fluida dalam ruang
                    tertutup akan diteruskan secara merata ke segala arah.
                    <img src={pascal} alt="Rumus Hukum Pascal" className="img-fluid mt-3 rounded shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="archimedesHeading">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#archimedes"
                    aria-expanded="false"
                    aria-controls="archimedes"
                  >
                    <strong>Hukum Archimedes</strong>
                  </button>
                </h2>
                <div id="archimedes" className="accordion-collapse collapse" data-bs-parent="#fluidaAccordion">
                  <div className="accordion-body">
                    Hukum Archimedes menyatakan bahwa setiap benda yang tercelup dalam fluida akan mengalami gaya angkat
                    yang besarnya sama dengan berat fluida yang dipindahkan.
                    <img src={archimedes} alt="Rumus Hukum Archimedes" className="img-fluid mt-3 rounded shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="stevinHeading">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#stevin"
                    aria-expanded="false"
                    aria-controls="stevin"
                  >
                    <strong>Hukum Stevin</strong>
                  </button>
                </h2>
                <div id="stevin" className="accordion-collapse collapse" data-bs-parent="#fluidaAccordion">
                  <div className="accordion-body">
                    Hukum Stevin menjelaskan bahwa tekanan pada suatu titik dalam fluida yang diam bergantung pada
                    kedalaman, massa jenis fluida, dan percepatan gravitasi.
                    <img src={stevin} alt="Rumus Hukum Stevin" className="img-fluid mt-3 rounded shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Fluida;
