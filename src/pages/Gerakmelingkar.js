import React from "react";
import { Link } from "react-router-dom";
import gm1 from "../assets/gm1.png";
import gm3 from "../assets/gm3.jpg";
import bianglala from "../assets/Bianglala.png";
import "./GerakMelingkar.css";
import Fisik from "./Fisik";

const cardData = [
  {
    id: 1,
    title: "Pengertian Gerak Melingkar",
    content: (
      <p>
        Gerak melingkar adalah gerak suatu benda yang lintasannya berupa
        lingkaran. Contohnya adalah gerakan Bulan mengelilingi Bumi atau roda
        kendaraan berputar. Juga biang lala yang berputar pada putarannya.
        <img src={bianglala} alt="Bianglala" />
      </p>
    ),
  },
  {
    id: 2,
    title: "Frekuensi dan Periode",
    content: (
      <>
        <p>
          <b>Frekuensi (f):</b> Banyaknya putaran dalam satu detik. <br />
          <b>Periode (T):</b> Waktu untuk menyelesaikan satu putaran penuh.
        </p>
        <img src={gm1} alt="Mobil" style={{ width: "50px", height: "auto" }} />
        <p>
          Hubungan antara frekuensi dan periode: <b>T = 1/f</b>.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Kecepatan dan Percepatan",
    content: (
      <>
        <p>
          Kecepatan dalam gerak melingkar dapat berupa kecepatan sudut
          (<b>ω</b>) atau kecepatan linear (<b>v</b>).
        </p>
        <img src={gm3} alt="Mobil" style={{ width: "50px", height: "auto" }} />
        <p>
          <b>Formula:</b> <br />
          Kecepatan sudut: <b>ω = 2π/T</b> atau <b>ω = 2πf</b>. <br />
          Kecepatan linear: <b>v = rω</b>.
        </p>
      </>
    ),
  },
];

const GerakMelingkar = () => {
  return (
    <div className="my-5">
      <h1 className="title-animation text-center">Gerak Melingkar</h1>
      <div className="card-container mt-4">
        {cardData.map((card) => (
          <div className="card-item" key={card.id}>
            <div className="card-header">
              <h3>{card.title}</h3>
            </div>
            <div className="card-body">
              {card.content}
            </div>
          </div>
        ))}
      </div>
      <div className="simulasi-box text-center">
        <Link to="/Fisik">
          <button className="btn-animation">Simulasi Gerak</button>
        </Link>
      </div>
    </div>
  );
};

export default GerakMelingkar;
