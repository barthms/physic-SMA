import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Perpindahan from "../assets/foto2.jpeg";
import mobil1 from "../assets/mobil1.png";
import "./GerakLurus.css";

const AnimasiMobil = () => {
  const [jarak, setJarak]= useState(0);
  const [posisi, setPosisi]= useState(0);

  const handleInputChange =( event) => {
    setJarak(Number(event.target.value));
    console.log('Posisi:',posisi);
};

  const gerakkanmobil = () => {
    if (jarak > 50 ) {
      alert("jarak maksimal adalah 50meter!");
    } else {
      setPosisi(jarak);
      console.log("Posisi baru:",jarak);
    }
  };

  return (
    <div className="container" >
      <h1>Simulasi Gerak Mobil</h1>
      <div className="control-panel">
        <label htmlFor="jarak">Masukkan jarak(meter): </label>
        <input 
        type="number"
        id="jarak"
        value={jarak}
        onChange={handleInputChange}
        placeholder="0-50"
        />
        <button onClick={gerakkanmobil}>Gerakkan Mobil</button>
      </div>
      <div className="lintasan">
        <div
          className="mobil"
          style={{ transform: `translateX(${(posisi / 50 ) * 100}%) `}}
        >
        <img src={mobil1} alt="Mobil" style={{ width: '40px', height: 'auto' }} />

        </div>
        <div className="garis">
          {[...Array(11)] .map((_, index) => (
            <span key={index} className="tanda">
              {index * 5} meter
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

  const GerakLurus = () => {
  const data = [
    {
      title: "Pengertian Gerak Lurus",
      content: (
        <Container>
          <p className="fade-in">
            Gerak suatu benda pada lintasan yang lurus. Dalam gerak lurus terdapat lima besaran penting yaitu jarak, perpindahan, kelajuan, kecepatan, dan percepatan.
          </p>
          <Row>
            <Col>
              <strong>Jenis Gerak Lurus:</strong>
              <ul>
                <li>Gerak Lurus Beraturan (GLB)</li>
                <li>Gerak Lurus Berubah Beraturan (GLBB): GJB, GVB, dan GVA</li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <h5>Penerapan:</h5>
              <ul>
                <li>
                  <strong>Transportasi:</strong> Untuk merancang kendaraan seperti mobil, kereta, dan pesawat.
                </li>
                <li>
                  <strong>Olahraga:</strong> Membantu strategi lari atau balap sepeda.
                </li>
                <li>
                  <strong>Astronomi:</strong> Mempelajari pergerakan benda langit seperti planet.
                </li>
                <li>
                  <strong>Konstruksi:</strong> Memastikan bangunan mampu menahan beban.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      ),
    },
    {
      title: "Jarak",
      content: (
        <Container>
          <Row>
            <Col>
              <p className="slide-in">
                Panjang lintasan sesungguhnya yang ditempuh oleh suatu benda. Jarak adalah besaran skalar karena tidak bergantung pada arah.
              </p>
              <p>
                <strong>Formula:</strong> <code>s = s1 + s2 + s3 + ... + sn</code>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Contoh ilustrasi jarak:</p>
              <img
                src={Perpindahan}
                alt="Ilustrasi Jarak"
                className="img-fluid rounded zoom-in"
              />
            </Col>
          </Row>
        </Container>
      ),
    },
    {
      title: "Perpindahan",
      content: (
        <Container>
          <Row>
            <Col>
              <p className="slide-in">
                Perubahan posisi dari keadaan awal ke keadaan akhir suatu benda. Perpindahan adalah besaran vektor yang hanya mempersoalkan jarak terdekat antar posisi.
              </p>
              <p>
                <strong>Formula:</strong> <code>∆s = Jarak terdekat dari posisi awal ke posisi akhir</code>
              </p>
              <p>Contoh ilustrasi perpindahan:</p>
              <img
                src={Perpindahan}
                alt="Ilustrasi Perpindahan"
                className="img-fluid rounded zoom-in"
              />
            </Col>
          </Row>
        </Container>
      ),
    },
    {
      title: "Kelajuan",
      content: (
        <Container>
          <Row>
            <Col>
              <p className="fade-in">
                Kelajuan adalah jarak yang ditempuh tiap satuan waktu. Kelajuan tidak memiliki arah, sehingga termasuk besaran skalar.
              </p>
              <p>
                <strong>Formula:</strong> <code>v = s / t</code>
              </p>
              <ul>
                <li>v = Kelajuan rata-rata (m/s)</li>
                <li>s = Jarak total yang ditempuh (m)</li>
                <li>t = Waktu tempuh yang diperlukan (s)</li>
              </ul>
            </Col>
          </Row>
        </Container>
      ),
    },
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4 title-glow">Gerak Lurus</h1>
        </Col>
      </Row>
      <Row>
        {data.map((item, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm h-100 hover-effect">
              <Card.Header className="bg-primary text-white text-center">
                <h5>{item.title}</h5>
              </Card.Header>
              <Card.Body>{item.content}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <AnimasiMobil />
    </Container>
  );
};

export default GerakLurus;