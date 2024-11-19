import React from 'react';
import foto2 from '../assets/Newton.jpg';
import '../App.css';

const Newtonn = () => {
  return (
    <div
      className="container mt-5"
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#2c3e50',
        lineHeight: '1.8',
      }}
    >


      
      <div className="row align-items-center mt-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={foto2}
            alt="Ilustrasi Hukum Newton"
            className="img-fluid rounded shadow"
            style={{
              maxWidth: '100%',
              height: 'auto',
              marginRight: '20px',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: '#3498db', fontWeight: 'bold' }}>Apa Itu Hukum Newton?</h2>
          <p style={{ fontSize: '16px', textAlign: 'justify' }}>
          Hukum Newton adalah prinsip dasar dalam fisika yang menjelaskan hubungan antara gaya dan gerak suatu benda.
                        Dirumuskan oleh Sir Isaac Newton, hukum ini membentuk fondasi dari mekanika klasik, cabang fisika yang mempelajari dinamika benda-benda fisik di bawah pengaruh gaya.
                        Hukum Newton mencakup pemahaman tentang bagaimana benda mempertahankan keadaan geraknya atau mengalami perubahan kecepatan dan arah ketika dipengaruhi oleh gaya tertentu.
                        Prinsip ini memungkinkan kita untuk meramalkan dan menghitung gerak benda, dari yang sangat kecil hingga yang sangat besar, dalam berbagai konteks, seperti pada kendaraan, sistem planet, mesin, dan berbagai teknologi lain.
                        Hukum Newton menguraikan bagaimana semua objek berinteraksi dalam bentuk aksi dan reaksi,
                        memberikan wawasan penting tentang kestabilan, kecepatan, dan percepatan suatu benda ketika gaya diterapkan.
                        Hukum newton memiliki 3 prinsip dasar yang mendasari fisika. Tiga hukum ini dikemukakan oleh Sir Isacc Newton dalam karya nya yang terkenal Philosophiæ Naturalis Principia Mathematica, yang diterbitkan pada tahun 1687.

          </p>
        </div>
      </div>

      
      <div className="mt-5">
        <h2
          className="text-center mb-4"
          style={{
            color: '#2ecc71',
            fontWeight: 'bold',
          }}
        >
          Contoh Penerapan Hukum Newton
        </h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div
              className="p-4 rounded shadow-sm"
              style={{
                backgroundColor: '#f1f8e9',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <h4 style={{ color: '#3498db' }}>Peluncuran Roket</h4>
              <p>
                Gas panas yang dipancarkan menghasilkan gaya reaksi yang mendorong roket meluncur ke atas. 
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="p-4 rounded shadow-sm"
              style={{
                backgroundColor: '#f1f8e9',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <h4 style={{ color: '#3498db' }}>Menarik Tali di Pohon</h4>
              <p>
                Saat anak menarik tali yang diikat ke pohon, pohon memberikan gaya reaksi yang setara dan berlawanan
                dengan gaya aksi yang diterapkan.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="p-4 rounded shadow-sm"
              style={{
                backgroundColor: '#f1f8e9',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <h4 style={{ color: '#3498db' }}>Tarikan Taplak Meja</h4>
              <p>
                Vas bunga tetap diam saat taplak meja ditarik cepat karena inersia benda mempertahankan keadaan diamnya.
               
              </p>
            </div>
          </div>
        </div>
      </div>

      
      </div>
    
  );
};

export default Newtonn;