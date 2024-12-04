import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./GerakJatuhBebas.css"; 

const GerakJatuhBebas = () => {
  const [bounceCount, setBounceCount] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);
  const [showBounce, setShowBounce] = useState(false);
  const [summary, setSummary] = useState("");

  const handleBounce = () => {
    if (bounceCount < 100) {
      setIsBouncing(true); 
      setTimeout(() => {
        setIsBouncing(false); 
      }, 550);

      setBounceCount((prevCount) => prevCount + 1);
      setSummary(`Pantulan ke-${bounceCount + 1} terjadi.`);
    } else {
      alert("Pantulan sudah mencapai 100 kali!");
    }
  };

  const content = [
    {
      id: 1,
      title: "Pengertian Gerak Jatuh Bebas",
      content: `
        <p>Gerak Jatuh Bebas atau GJB adalah gerak lurus berubah beraturan dalam arah vertikal (atas ke bawah) dengan kecepatan awal nol serta mengalami percepatan sebesar percepatan gravitasi bumi (<b>a = g</b>).</p>
        <p>Benda yang jatuh akan bergerak semakin cepat dari kecepatan nol hingga kecepatan maksimum sesaat sebelum menyentuh bumi.</p>
      `,
    },
    {
      id: 2,
      title: "Ciri-Ciri Gerak Jatuh Bebas",
      content: `
        <ul>
          <li>Benda bergerak dari atas ke bawah dengan permukaan tanah sebagai titik acuan.</li>
          <li>Lintasan gerak benda berupa garis lurus vertikal.</li>
          <li>Kecepatan awal benda sama dengan nol (<b>v<sub>0</sub> = 0</b>).</li>
          <li>Percepatan benda sama dengan percepatan gravitasi bumi (<b>a = g</b>).</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "Rumus-Rumus Gerak Jatuh Bebas",
      content: `
        <ul>
          <li><b>h</b> = ½ g t² → perpindahan setelah t detik</li>
          <li><b>v</b> = g t → kecepatan setelah t detik</li>
          <li><b>v²</b> = 2 g h</li>
          <li><b>h'</b> = h<sub>0</sub> - ½ g t² → ketinggian setelah t detik</li>
          <li><b>t</b> = √(2h<sub>0</sub> / g) → waktu mencapai lantai</li>
        </ul>
      `,
    },
    {
      id: 4,
      title: "Penerapan Gerak Jatuh Bebas",
      content: `
        <p>Contoh penerapan gerak jatuh bebas dalam kehidupan sehari-hari meliputi:</p>
        <ul>
          <li>Buah yang jatuh dari pohonnya.</li>
          <li>Seorang penerjun payung yang jatuh bebas di udara tanpa parasut terbuka.</li>
          <li>Benda yang dijatuhkan secara vertikal dari ketinggian tertentu.</li>
        </ul>
      `,
    },
    {
      id: 5,
      title: "Grafik Gerak Jatuh Bebas",
      content: `
        <p>Grafik gerak jatuh bebas (GJB) meliputi:</p>
        <ul>
          <li>Grafik hubungan perpindahan terhadap waktu (<b>s-t</b>).</li>
          <li>Grafik hubungan ketinggian terhadap waktu (<b>h-t</b>).</li>
          <li>Grafik hubungan kecepatan terhadap waktu (<b>v-t</b>).</li>
          <li>Grafik hubungan percepatan terhadap waktu (<b>a-t</b>).</li>
        </ul>
      `,
    },
  ];

  return (
    <Container fluid className="gjb-container">
      <Row>
        <Col>
          <h1 className="text-center title-animation">Gerak Jatuh Bebas (GJB)</h1>
          <p className="text-center description">
            Menjelajahi konsep, rumus-rumus, dan penerapan Gerak Jatuh Bebas (GJB) dengan penjelasan yang mendalam.
          </p>
        </Col>
      </Row>

      <Row>
        {content.map((item) => (
          <Col md={6} lg={4} className="mb-4" key={item.id}>
            <Card className="content-card shadow-lg">
              <Card.Header className="card-header">
                <h5>{item.title}</h5>
              </Card.Header>
              <Card.Body className="card-body">
                <div
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  className="text-content"
                ></div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="text-center mb-4">
        <Col>
          <Button
            variant="primary"
            onClick={() => setShowBounce(true)}
          >
            Tampilkan Bola Pantul
          </Button>
        </Col>
      </Row>

      {showBounce && (
        <Row className="text-center">
          <Col>
            <div className="basketball-container">
              <div
                className={`basketball ${isBouncing ? "bouncing" : ""}`}
                onClick={handleBounce}
              ></div>
              <p>Jumlah Pantulan: {bounceCount}</p>
              <div className="summary">
                <p><b> Pantulan:</b></p>
                <p>{summary}</p>
                <p>Bola basket yang terus memantul hingga mencapai titik maksimum sebelum akhirnya berhenti, menggambarkan konsep gerak jatuh bebas dan bagaimana gravitasi mempengaruhi gerakan benda secara alami.</p>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default GerakJatuhBebas;