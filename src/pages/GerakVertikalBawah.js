import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const cardData = [
  {
    id: 1,
    title: "Apa Itu Gerak Vertikal ke Bawah?",
    content: (
      <>
        <p>
          <b>Gerak Vertikal ke Bawah</b> adalah gerak benda yang dilempar atau
          dijatuhkan dari ketinggian tertentu dengan kecepatan awal, di mana
          geraknya dipengaruhi oleh gravitasi bumi. Dalam kondisi ini, gesekan
          udara sering diabaikan untuk mempermudah analisis.
        </p>
        <ul>
          <li>
            Gerak ini merupakan gerak lurus berubah beraturan (GLBB) karena
            percepatan gravitasi <b>(g = 9,8 m/s²)</b>.
          </li>
          <li>
            Benda bergerak semakin cepat ke bawah seiring waktu, karena gaya
            gravitasi mempercepat benda.
          </li>
          <li>
            Kecepatan awal benda (<b>v₀</b>) memberikan kontribusi pada
            kecepatan akhirnya.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Rumus-Rumus Gerak Vertikal ke Bawah",
    content: (
      <>
        <p>
          Berikut adalah beberapa rumus penting yang digunakan untuk menghitung
          parameter gerak vertikal ke bawah:
        </p>
        <ul>
          <li>
            <b>Kecepatan Sesaat (v):</b> <code>v = v₀ + g × t</code>
          </li>
          <li>
            <b>Jarak Tempuh (s):</b> <code>s = v₀ × t + 1/2 × g × t²</code>
          </li>
          <li>
            <b>Kecepatan Akhir (v):</b> <code>v² = v₀² + 2 × g × s</code>
          </li>
          <li>
            <b>Waktu Jatuh (t):</b> <code>t = (v - v₀) / g</code>
          </li>
        </ul>
        <p>Keterangan:</p>
        <ul>
          <li><b>v:</b> Kecepatan sesaat benda (m/s)</li>
          <li><b>v₀:</b> Kecepatan awal benda (m/s)</li>
          <li><b>s:</b> Jarak tempuh benda (m)</li>
          <li><b>t:</b> Waktu jatuh (s)</li>
          <li><b>g:</b> Percepatan gravitasi bumi (m/s²)</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Ciri-Ciri Gerak Vertikal ke Bawah",
    content: (
      <>
        <p>
          Gerak vertikal ke bawah memiliki ciri-ciri khusus yang membedakannya
          dari jenis gerak lainnya:
        </p>
        <ul>
          <li>
            Percepatan benda selalu konstan, yaitu sebesar percepatan gravitasi
            (<b>g</b>).
          </li>
          <li>
            Kecepatan awal benda (<b>v₀</b>) tidak nol, melainkan ada saat
            benda mulai bergerak.
          </li>
          <li>
            Semakin lama benda jatuh, kecepatannya semakin besar karena
            pengaruh gravitasi.
          </li>
          <li>
            Jarak tempuh benda bertambah secara kuadrat terhadap waktu
            (<code>s ∝ t²</code>).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Penerapan Gerak Vertikal ke Bawah",
    content: (
      <>
        <p>
          Konsep gerak vertikal ke bawah sering diterapkan dalam kehidupan
          sehari-hari dan ilmu pengetahuan, seperti:
        </p>
        <ul>
          <li>
            <b>Menara Pencakar Langit:</b> Menghitung waktu yang dibutuhkan
            benda jatuh dari atap ke tanah.
          </li>
          <li>
            <b>Ilmu Fisika:</b> Eksperimen pengukuran percepatan gravitasi bumi
            menggunakan benda jatuh.
          </li>
          <li>
            <b>Proyek Konstruksi:</b> Menghitung jarak dan waktu jatuh bahan
            konstruksi dari ketinggian.
          </li>
          <li>
            <b>Olahraga:</b> Misalnya, bola yang dilemparkan ke bawah dalam
            permainan seperti voli atau bola basket.
          </li>
        </ul>
      </>
    ),
  },
];

const GerakVertikalBawah = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Gerak Vertikal ke Bawah</h1>
          <p className="text-center">
            Penjelasan tentang konsep, rumus-rumus, ciri-ciri, dan penerapan
            gerak vertikal ke bawah dalam kehidupan sehari-hari.
          </p>
        </Col>
      </Row>
      <Row>
        {cardData.map((card) => (
          <Col md={6} sm={12} className="mb-4" key={card.id}>
            <Card className="shadow">
              <Card.Header className="bg-primary text-white">
                {card.title}
              </Card.Header>
              <Card.Body>{card.content}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GerakVertikalBawah;