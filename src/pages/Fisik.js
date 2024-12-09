import React, { useState } from "react";
import "../styling/Fisik.css";

const Fisik = () => {
  const [v, setV] = useState(""); 
  const [r, setR] = useState("");
  const [f, setF] = useState(""); 
  const [T, setT] = useState(""); 
  const [hasil, setHasil] = useState(null); 

  const hitungKecepatanSudut = () => {
    if (v && r) {
      const omega = v / r; 
      setHasil(omega.toFixed(2));
    } else if (f) {
      const omega = 2 * Math.PI * f;
      setHasil(omega.toFixed(2));
    } else if (T) {
      const omega = (2 * Math.PI) / T; 
      setHasil(omega.toFixed(2));
    } else {
      alert("Masukkan nilai yang diperlukan untuk menghitung kecepatan  dan percepatan  !");
    }
  };

  const resetForm = () => {
    setV("");
    setR("");
    setF("");
    setT("");
    setHasil(null);
  };

  return (
    <div className="container">
      <h1>Kecepatan Sudut</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Kecepatan Linear (v) dalam m/s</label>
        <input
          type="number"
          value={v}
          onChange={(e) => setV(e.target.value)}
          placeholder="Masukkan kecepatan linear"
        />

        <label>Jari-Jari Lintasan (r) dalam meter</label>
        <input
          type="number"
          value={r}
          onChange={(e) => setR(e.target.value)}
          placeholder="Masukkan jari-jari lintasan"
        />

        <label>Frekuensi (f) dalam Hz</label>
        <input
          type="number"
          value={f}
          onChange={(e) => setF(e.target.value)}
          placeholder="Masukkan frekuensi"
        />

        <label>Periode (T) dalam detik</label>
        <input
          type="number"
          value={T}
          onChange={(e) => setT(e.target.value)}
          placeholder="Masukkan periode"
        />

        <button type="button" onClick={hitungKecepatanSudut}>
          Hitung Kecepatan Sudut
        </button>
        <button type="button" onClick={resetForm}>
          Mengatur Ulang
        </button>
      </form>

      {hasil !== null && (
        <div className="hasil">
          <h2>Hasil Kecepatan Sudut:</h2>
          <p>{hasil} rad/s</p>
        </div>
      )}

      <div className="rumus">
        <h3>Rumus Kecepatan Sudut:</h3>
        <p><b>ω = v / r</b></p>
        <p>Atau:</p>
        <p><b>ω = 2πf</b></p>
        <p>Atau:</p>
        <p><b>ω = 2π / T</b></p>
        <p>Dimana:</p>
        <ul>
          <li><b>ω</b> = Kecepatan sudut (rad/s)</li>
          <li><b>v</b> = Kecepatan linear (m/s)</li>
          <li><b>r</b> = Jari-jari lintasan (m)</li>
          <li><b>f</b> = Frekuensi (Hz)</li>
          <li><b>T</b> = Periode (s)</li>
        </ul>
      </div>
    </div>
  );
};

export default Fisik;
