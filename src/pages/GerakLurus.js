import React, { useState, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import mobil1 from "../assets/mobil1.png";
import Perpindahan from "../assets/foto2.jpeg";
import "./GerakLurus.css";

const AnimasiMobil = () => {
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
      setPosisi(posisiBaru);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Simulasi Gerak Mobil</h1>
      <div className="control-panel text-center my-4">
        <label htmlFor="jarak">Masukkan jarak (meter): </label>
        <input
          type="number"
          id="jarak"
          value={jarak}
          onChange={handleInputChange}
          placeholder="0-50"
        />
        <button onClick={gerakkanMobil} className="btn btn-primary mx-2">Gerakkan Mobil</button>
      </div>
      <div className="lintasan" ref={lintasanRef}><div
       className="mobil"
          style={{ transform: `translateX(${posisi}px)` }}
        >
          <img src={mobil1} alt="Mobil" style={{ width: "50px", height: "auto" }}/>
        </div>
        <div className="garis">
          {[...Array(11)].map((_, index) => (
            <span key={index} className="tanda">
              {index *5}meter
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
          <p>
            Gerak suatu benda pada lintasan yang lurus. Dalam gerak lurus
            terdapat lima besaran penting yaitu jarak, perpindahan, kelajuan,
            kecepatan, dan percepatan.
          </p>
          <ul>
            <li>Gerak Lurus Beraturan (GLB)</li>
            <li>Gerak Lurus Berubah Beraturan (GLBB): GJB, GVB, dan GVA</li>
          </ul>
        </Container>
      ),
    },
    {
      title: "Jarak",
      content: (
        <Container>
          <p>
            Panjang lintasan sesungguhnya yang ditempuh oleh suatu benda. Jarak
            adalah besaran skalar karena tidak bergantung pada arah.
          </p>
          <p>
            <strong>Formula:</strong> <code>s = s1 + s2 + s3 + ... + sn</code>
          </p>
          <img
            src={Perpindahan}
            alt="Ilustrasi Jarak"
            className="img-fluid rounded"
          />
        </Container>
      ),
    },
    {
      title: "Perpindahan",
      content: (
        <Container>
          <p>
            Perubahan posisi dari keadaan awal ke keadaan akhir suatu benda.
            Perpindahan adalah besaran vektor yang hanya mempersoalkan jarak
            terdekat antar posisi.
          </p>
          <p>
            <strong>Formula:</strong> ∆s = Jarak terdekat dari posisi awal ke
            posisi akhir
          </p>
          <img
            src={Perpindahan}
            alt="Ilustrasi Perpindahan"
            className="img-fluid rounded"
          />
        </Container>
      ),
    },
    {
      title: "Kelajuan",
      content: (
        <Container>
          <p>
            Kelajuan adalah jarak yang ditempuh tiap satuan waktu. Kelajuan
            tidak memiliki arah, sehingga termasuk besaran skalar.
          </p>
          <p>
            <strong>Formula:</strong> <code>v = s / t</code>
          </p>
        </Container>
      ),
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Gerak Lurus</h1>
      <Row>
        {data.map((item, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm h-100">
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
