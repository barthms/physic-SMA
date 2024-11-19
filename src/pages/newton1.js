import React, { useState } from "react";
import inersia from '../assets/inersia.jpg';
import percepatan from '../assets/percepatan.png';
import aksireaksi from '../assets/aksireaksi.jpg'
const NewtonLaws = () => {
  const [showExplanations, setShowExplanations] = useState({
    law1: false,
    law2: false,
    law3: false,
  });

  const handleToggleExplanation = (law) => {
    setShowExplanations((prev) => ({
      ...prev,
      [law]: !prev[law],
    }));
  };

  const laws = [
    {
      id: "law1",
      title: "Hukum Inersia",
      description:
        "Hukum inersia adalah salah satu prinsip dasar dalam fisika, khususnya dalam mekanika klasik. Konsep ini mengacu pada kecenderungan suatu benda untuk tetap berada dalam keadaan diam atau dalam keadaan bergerak lurus beraturan (tanpa perubahan kecepatan) kecuali ada gaya yang mempengaruhinya.",
      explanations: [
        {
          title: "Konsep Inersia",
          content:
            "Benda dalam keadaan diam tetap diam, dan benda dalam keadaan bergerak lurus beraturan tetap bergerak lurus beraturan, kecuali jika ada gaya eksternal yang bertindak pada benda tersebut.",
        },
        {
          title: "Contoh Sehari-Hari",
          content:
            "Ketika sebuah mobil mendadak berhenti atau mengerem secara tiba-tiba, tubuh kita cenderung tetap bergerak maju (karena inersia). Ini bisa terasa seperti kita terdorong ke depan meskipun mobilnya berhenti. Inilah contoh hukum inersia, di mana tubuh kita berusaha untuk mempertahankan kecepatan dan arah gerak yang sebelumnya.",
        },
        {
          title: "Rumus Inersia",
          content: (
            <div>
              <p>
                Berikut adalah rumus yang menunjukkan hubungan gaya, massa, dan percepatan dalam hukum inersia (Hukum Newton I):
              </p>
              <img
                src={inersia}
                alt="Rumus Inersia"
                style={{ width: "100%", maxWidth: "600px", display: "block", margin: "0 auto" }}
              />
            </div>
          ),
        },
      ],
    },
    {
      id: "law2",
      title: "Hukum Percepatan",
      description:
        "Hukum percepatan adalah bagian dari Hukum Kedua Newton, yang menjelaskan hubungan antara gaya, massa, dan percepatan suatu benda. Secara matematis.",
      explanations: [
        {
          title: "Konsep Percepatan",
          content:
            "Hukum percepatan menyatakan bahwa percepatan suatu benda berbanding lurus dengan gaya total yang bekerja padanya, dan berbanding terbalik dengan massa benda.",
        },
        {
          title: "Contoh Sehari-Hari",
          content:
            "Jika Anda melempar bola kecil dengan gaya tertentu, bola akan memiliki percepatan lebih besar dibandingkan bola besar yang dilempar dengan gaya yang sama.",
        },
        {
          title: "Rumus Percepatan",
          content: (
            <div>
              <p>
                Berikut adalah rumus dari Hukum Percepatan:
              </p>
              <img
                src={percepatan}
                alt="Rumus F = ma"
                style={{ width: "100%", maxWidth: "600px", display: "block", margin: "0 auto" }}
              />
            </div>
          ),
        },
      ],
    },
    {
      id: "law3",
      title: "Hukum Aksi Reaksi (Hukum Newton 3)",
      description:
        "Hukum Newton Ketiga menyatakan bahwa setiap aksi memiliki reaksi yang sama besar tetapi berlawanan arah.",
      explanations: [
        {
          title: "Definisi Aksi Reaksi",
          content:
            "Hukum ini menggambarkan interaksi antara dua benda: saat salah satu benda memberikan gaya pada benda lain, benda kedua memberikan gaya balik yang sama besar tetapi berlawanan arah.",
        },
        {
          title: "Contoh Sehari-Hari",
          content:
            "Ketika melompat dari perahu, perahu terdorong ke belakang sementara tubuh Anda terdorong ke depan.",
        },
        {
          title: "Rumus",
          content: (
            <div>
              <p>
                Berikut adalah rumus dari Hukum Newton 3 (Aksi Reaksi):
              </p>
              <img
                src={aksireaksi}
                alt="Aksi dan Reaksi"
                style={{ width: "100%", maxWidth: "600px", display: "block", margin: "0 auto" }}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-left mb-4">Jenis Hukum Newton</h1>
      <p className="text-left text-muted mb-5">
        Hukum Newton terdiri dari tiga prinsip dasar yang menjelaskan hubungan
        antara gaya dan gerak. Ketiga hukum ini mendasari ilmu mekanika dan
        memberikan wawasan penting tentang dinamika benda.
      </p>
      {laws.map((law) => (
        <div
          key={law.id}
          className="card mb-4 shadow-sm"
          style={{ textAlign: "left" }}
        >
          <div className="card-body">
            <h3 className="card-title text-primary">{law.title}</h3>
            <p className="card-text">{law.description}</p>
            <button
              className={`btn ${
                showExplanations[law.id] ? "btn-danger" : "btn-success"
              } mt-3`}
              onClick={() => handleToggleExplanation(law.id)}
            >
              {showExplanations[law.id]
                ? "Tutup Penjelasan"
                : "Lihat Penjelasan"}
            </button>
            {showExplanations[law.id] && (
              <div className="mt-4">
                {law.explanations.map((explanation, index) => (
                  <div
                    key={index}
                    className="alert alert-secondary"
                    role="alert"
                  >
                    <h5 className="alert-heading">{explanation.title}</h5>
                    <div>{explanation.content}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewtonLaws;
