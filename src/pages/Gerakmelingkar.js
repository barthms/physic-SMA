import React from 'react';
import { container, Row, Col,card, Accordion } from 'react-bootstrap';
import gm1 from '../assets/gm1.png';
import gm2 from '../assets/gm2.png';
import gm3 from '../assets/gm3.jpg';
import gm4 from '../assets/gm4.png';

const cardData =[
    {
        id:1,
        title:"Pengertian Gerak melingkar",
        content:"gerak suatu benda yang lintasannya berupa lingkaran yang mengelilingi suatu titik tetap. Contohnya adalah gerakan Bulan mengelilingi Bumi.",
    },
    {
        id: 2,
        title:"Frekuensi dan Periode",
        content:(
            <>
            <p><b>Frekuensi (f):</b>Banyaknya putaran yang dilakukan dalam satu detik.</p>
            <p><b>Periode (T):waktu yang dibutuhkan objek untuk menyelesaikan satu putaran penuh</b> </p>
            <img src = {gm1} alt="konsep gm1" className="img-fluid rounded"/>
            <ul>
                <li><b>n =</b>banyak putaran</li>
                <li><b>t =</b>waktu (s)</li>
                <li><b>1 putaran =</b>2 \pi rad (radian)</li>
                <li><b>1 rpm (rotasi per menit) =</b>\pi / 15.</li>
            </ul>
            <p>eriode dan frekuensi dihubungkan dengan persamaan:</p>
            <img src = {gm2} alt="konsep gm2" className="img-fluid rounded"/>
            <p>Dimana:
            <ul>
            <li><b>T =</b> periode (s)</li>
            <li><b>f = </b> frekuensi (Hz)</li>
            </ul>
        </p>
    </>
    ),
  },

   {
    id: 3,
    title:"Kecepatan dan Percepatan Gerak Melingkar",
    content:(
        <>
        <p>
        "Pada gerak melingkar terdapat hal penting yang harus kamu perhatikan, yaitu semua persamaan kecepatan dan percepatan selalu menggunakan persamaan kecepatan sudut dan percepatan sudut. Perhatikan gambar lintasan di bawah ini.",
        </p>
    <img src = {gm3} alt="konsep gm3" className="img-fluid rounded"/>
    <p>Kecepatan (<b>(v)</b>) merupakan kecepatan linier atau kecepatan yang biasa kamu jumpai dalam gerak lurus. Kecepatan sudut atau disebut omega (\omega) dan kecepatan linear (v) dihubungkan dengan persamaan:</p>
    <img src = {gm4} alt="konsep gm4" className="img-fluid rounded" />
    <p> Dimana: </p>
    <ul>
    <li><b>v =</b>  kecepatan linear (m/s)</li>
    <li><b>r = </b> jari-jari lintasan (m)</li>
    </ul>
    <p>Nilai kecepatan sudut dapat dicari jika diketahui frekuensi ataupun periodenya. Untuk mencari nilai kecepatan sudut (\omega) dipakai rumus:</p>
    <MathJax.Provider>
        <p>
            <MathJax.Node  inline formula= {"\\omega =2\\pi f"} />
        </p>
        <p>
            atau
        </p>
        <p>
        <MathJax.Node  inline formula= {"\\omega =frac{2\\pi}{T} "} />
        </p>
        <p> Dimana</p>
        <ul>
        <li><b>ω</b> = Kecepatan sudut (rad/s)</li>
        <li><b>π</b> = 22/7 atau 3,14</li>
        <li><b>f</b> = Frekuensi (Hz)</li>
        <li><b>T</b> = Periode (detik)</li>
        </ul>
    </MathJax.Provider>
   </>
    ),
   },
];

const GerakMelingkar = () => {
    return (
        <container className= "my-5">
            <Row>
                <Col>
                <h1 className= " text-center mb-4">GerakMelingkar</h1>
                </Col>
            </Row>
            <Row>
                {cardData.map((card) => (
                    <col md={4} className="mb-4" key={card.id}>
                        <Card>
                            <Card.Header className="bg-primary text-white">
                        {card.title}
                        </Card.Header>
                        <Card.Body>{card.content}</Card.Body>
                        </Card>
                    </col>
                ))}
            </Row>
        </container>
    );
};

export default GerakMelingkar;