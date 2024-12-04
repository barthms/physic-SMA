import React from "react";

const Testimonials = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <h3
          className="text-center mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Testimoni Siswa
        </h3>
        <div className="row">
          {[
            {
              text: "Materi yang dijelaskan sangat mudah dipahami. Saya jadi semakin suka belajar fisika!",
              name: "Andi dari SMAN 1",
            },
            {
              text: "Simulasi virtualnya sangat membantu dalam memahami konsep yang abstrak.",
              name: "Budi dari SMAN 2",
            },
            {
              text: "Latihan soalnya lengkap dan pembahasan sangat detail. Sangat membantu persiapan ujian!",
              name: "Citra dari SMAN 3",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              data-aos-duration="1000"
            >
              <div className="card testimonial-card p-3 mb-3">
                <div className="card-body">
                  <p className="card-text">{testimonial.text}</p>
                  <footer className="blockquote-footer">
                    {testimonial.name}
                  </footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
