import React, { useState } from "react";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpeg";

const LearningMethods = () => {
  const [activeTab, setActiveTab] = useState(0);

  const materials = [
    {
      title: "Besaran dan Satuan",
      description: "Memahami konsep dasar pengukuran dan standar internasional",
      icon: "fas fa-ruler text-primary"
    },
    {
      title: "Vektor",
      description: "Mempelajari besaran yang memiliki nilai dan arah",
      icon: "fas fa-arrows-alt text-success"
    },
    {
      title: "Gerak Lurus",
      description: "Menganalisis gerak benda pada lintasan lurus",
      icon: "fas fa-long-arrow-alt-right text-info"
    }
  ];

  const methods = [
    {
      title: "Video Pembelajaran",
      description: "Materi visual yang interaktif dan mudah dipahami",
      icon: "fas fa-play-circle text-danger"
    },
    {
      title: "Praktikum Virtual",
      description: "Simulasi eksperimen fisika secara digital",
      icon: "fas fa-laptop-code text-primary"
    },
    {
      title: "Diskusi Interaktif",
      description: "Forum tanya jawab dengan pengajar dan sesama siswa",
      icon: "fas fa-comments text-success"
    },
    {
      title: "Quiz Online",
      description: "Evaluasi pemahaman materi secara real-time",
      icon: "fas fa-tasks text-warning"
    }
  ];

  return (
    <div className="container mb-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000">
          <div className="position-relative">
            <img
              src={foto3}
              alt="Materi Pembelajaran"
              className="img-fluid rounded shadow hover-zoom"
              style={{ transition: "transform 0.3s" }}
              onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.target.style.transform = "scale(1)"}
            />
            <div className="overlay-text position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-75 rounded-bottom w-100">
              <h5 className="mb-0">Eksplorasi Fisika Modern</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000">
          <h4 className="text-primary mb-4">Materi Pembelajaran Interaktif</h4>
          <p className="lead">
            Pelajari konsep dasar fisika dengan metode yang sistematis dan mudah dipahami.
            Dilengkapi dengan contoh penerapan dalam kehidupan sehari-hari.
          </p>
          <div className="card-deck">
            {materials.map((material, index) => (
              <div 
                key={index}
                className="card mb-3 border-0 shadow-sm hover-card"
                onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                style={{ transition: "transform 0.3s" }}
              >
                <div className="card-body">
                  <i className={`${material.icon} fa-2x mb-2`}></i>
                  <h5 className="card-title">{material.title}</h5>
                  <p className="card-text small text-muted">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000">
          <h4 className="text-primary mb-4">Metode Pembelajaran Modern</h4>
          <p className="lead">Berbagai metode pembelajaran yang efektif untuk memahami fisika:</p>
          <div className="accordion" id="methodAccordion">
            {methods.map((method, index) => (
              <div className="accordion-item border-0 mb-2" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${activeTab !== index ? 'collapsed' : ''}`}
                    type="button"
                    onClick={() => setActiveTab(index)}
                  >
                    <i className={`${method.icon} me-2`}></i>
                    {method.title}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${activeTab === index ? 'show' : ''}`}>
                  <div className="accordion-body">
                    {method.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000">
          <div className="position-relative">
            <img
              src={foto4}
              alt="Metode Pembelajaran"
              className="img-fluid rounded shadow hover-zoom"
              style={{ transition: "transform 0.3s" }}
              onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.target.style.transform = "scale(1)"}
            />
            <div className="overlay-text position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-75 rounded-bottom w-100">
              <h5 className="mb-0">Pembelajaran yang Menyenangkan</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningMethods;