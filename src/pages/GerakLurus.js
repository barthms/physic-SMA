import React, { useState, useRef } from "react";
import '../styling/GerakLurus.css';
import mobil1 from '../assets/mobil1.png'; // Pastikan path gambar sesuai

const GerakLurus = () => {
  const [jarak, setJarak] = useState(0);
  const [posisi, setPosisi] = useState(0);
  const lintasanRef = useRef(null);

  const handleInputChange = (event) => {
    const inputValue = Number(event.target.value);
    if (inputValue < 0 || inputValue > 50) {
      alert("Jarak harus antara 0 dan 50 meter!");
    } else {
      setJarak(inputValue);
    }
  };

  const gerakkanMobil = () => {
    if (lintasanRef.current) {
      const lintasanWidth = lintasanRef.current.offsetWidth;
      const posisiBaru = (jarak / 50) * lintasanWidth;
      setPosisi(posisiBaru);  // Update posisi berdasarkan jarak yang dimasukkan
    }
  };

  return (
    <div className="container py-5 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-xl shadow-lg">
      <header className="text-center mb-5">
        <h1 className="text-4xl font-bold text-blue-800">Gerak Lurus</h1>
        <p className="text-lg text-gray-500">Pelajari konsep dan penerapan gerak lurus dengan interaktif.</p>
        <hr className="w-1/2 mx-auto my-4 border-2 border-blue-500 rounded-xl" />
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Simulasi Gerak Mobil</h2>
        <div className="text-center mb-4">
          <label htmlFor="jarak" className="text-lg font-medium text-blue-600">Masukkan jarak (meter):</label>
          <input
            type="number"
            id="jarak"
            value={jarak}
            onChange={handleInputChange}
            placeholder="0-50"
            className="border rounded-md p-2 mt-2"
          />
          <button onClick={gerakkanMobil} className="btn btn-primary mx-2 mt-4">Gerakkan Mobil</button>
        </div>
        <div className="lintasan relative bg-gray-200 rounded-lg h-20 w-full mt-4" ref={lintasanRef}>
          {/* Gambar mobil yang bergerak */}
          <div
            className="mobil absolute top-0 left-0"
            style={{ transform: `translateX(${posisi}px)` }}
          >
            <img src={mobil1} alt="Mobil" style={{ width: "50px", height: "auto" }} />
          </div>
          <div className="garis absolute bottom-0 w-full flex justify-between px-2">
            {[...Array(11)].map((_, index) => (
              <span key={index} className="text-xs text-gray-600">{index * 5}meter </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-green-600">Rumus Gerak Lurus</h3>
        <p className="text-lg text-gray-700 mb-4">Gerak lurus dapat dihitung dengan rumus dasar yang berhubungan dengan kecepatan, waktu, dan percepatan.</p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 text-xl font-mono">
        </div>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>v:</strong> Kecepatan akhir (m/s)</li>
          <li><strong>u:</strong> Kecepatan awal (m/s)</li>
          <li><strong>a:</strong> Percepatan (m/s²)</li>
          <li><strong>t:</strong> Waktu (s)</li>
        </ul>
      </section>
    </div>
  );
};

export default GerakLurus;
