import React from "react";

const FeaturesSection = () => {
  return (
    <div className="container mt-5">
      <h3
        className="text-center mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Keunggulan Pembelajaran Kami
      </h3>
      <div className="row text-center mt-4">
        <div
          className="col-md-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="feature-box p-4 shadow">
            <i className="fas fa-book fa-3x mb-3 text-primary"></i>
            <h4>Materi Lengkap</h4>
            <p>Mencakup seluruh materi Fisika kelas 10 sesuai kurikulum terbaru</p>
          </div>
        </div>
        <div
          className="col-md-4"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <div className="feature-box p-4 shadow">
            <i className="fas fa-flask fa-3x mb-3 text-success"></i>
            <h4>Eksperimen Virtual</h4>
            <p>Simulasi interaktif untuk memahami konsep fisika dengan lebih baik</p>
          </div>
        </div>
        <div
          className="col-md-4"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <div className="feature-box p-4 shadow">
            <i className="fas fa-tasks fa-3x mb-3 text-warning"></i>
            <h4>Latihan Soal</h4>
            <p>Bank soal lengkap dengan pembahasan detail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
