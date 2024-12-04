import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tegangan from '../assets/tegangan.jpg';

function Besaran() {
    const [showContent, setShowContent] = useState({});

    const toggleVisibility = (index) => {
        setShowContent((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-center mb-4 text-secondary fw-bold display-4">Besaran Hukum Hooke</h1>
                    <div className="full-width mb-4">
                        <h5 className="section-title" onClick={() => toggleVisibility(1)} style={{ cursor: 'pointer' }}> 1. Tegangan </h5>
                        <img src= {tegangan} alt="Tegangan" className="img-fluid mb-2" style={{width: '150px', height:'150px'}} />
                        {showContent[1] && (
                            <div>
                                <p>
                                    Tegangan merupakan suatu kondisi dari suatu benda yang mengalami pertambahan panjang saat suatu benda
                                    diberikan sebuah gaya di salah satu ujungnya, sementara ujung lainnya ditahan. Berikut ini adalah rumus
                                    tegangan:
                                </p>
                                <p className="fw-bold">σ = F/A</p>
                                <p>Dimana:</p>
                                <ul>
                                    <li>σ = tegangan (Newton/m<sup>2</sup>)</li>
                                    <li>F = gaya (N)</li>
                                    <li>A = luas penampang (m<sup>2</sup>)</li>
                                </ul>
                                <p>
                                    <strong>Contoh Soal:</strong> 
                                    <p>Jika gaya yang diberikan adalah 10 N dan luas penampangnya 2m<sup>2</sup>,
                                    berapakah tegangan yang terjadi?</p>
                                    <p>Langkah 1: Cari σ </p>
                                    <p>σ = F/A</p>
                                    <p>σ = 10N/2m<sup>2</sup> = 5N/m<sup>2</sup></p>
                                    <p> Maka, Tegangan yang terjadi sebesar 5N/m<sup>2</sup> </p>
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="full-width mb-4">
                        <h5 className="section-title" onClick={() => toggleVisibility(2)} style={{ cursor: 'pointer' }}> 2. Regangan </h5 >
                        <img src="https://asset.kompas.com/crops/B5gdIt2miVovG7G1j48EDhU-nwI=/0x149:800x682/750x500/data/photo/2020/10/09/5f7fccf8068b0.jpg" alt="Regangan" className="img-fluid mb-2" style={{width: '150px', height:'150px'}} />
                        {showContent[2] && (
                            <div>
                                <p>
                                    Regangan merupakan sebuah perbandingan antara pertambahan panjang kawat dalam x meter dan panjang normal
                                    kawat dalam x meter. Berikut ini adalah rumus regangan:
                                </p>
                                <p className="fw-bold">e = ΔL/Lo</p>
                                <p>Dimana:</p>
                                <ul>
                                    <li>e = regangan</li>
                                    <li>ΔL = pertambahan panjang (meter)</li>
                                    <li>Lo = panjang mula atau awal (meter)</li>
                                </ul>
                                <p>
                                    <strong>Contoh Soal:</strong> 
                                    <p>Jika panjang awal kawat adalah 5m dan panjang setelah diberi gaya menjadi
                                    5.1m, berapakah regangan yang terjadi?</p>
                                    <p>Langkah 1: Cari ΔL</p>
                                    <p>ΔL = 5.1m - 5m = 0.1m </p>
                                    <p>Langkah 2: Cari e</p>
                                    <p>e = ΔL/Lo</p>
                                    <p>e = 0.1m/5m = 0.02</p>
                                    <p>Maka, Regangan yang terjadi sebesar 0.02 atau setara dengan 2%</p>
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="full-width mb-4">
                        <h5 className="section-title" onClick={() => toggleVisibility(3)} style={{ cursor: 'pointer' }}> 3. Modulus Elastisitas </h5>
                        <img alt="Placeholder gif" src="https://upload.wikimedia.org/wikipedia/commons/8/81/Gas_damper_mov.gif" className="img-fluid" style={{width: '150px', height:'150px'}} />
                        {showContent[3] && (
                            <div>
                                <p>
                                    Modulus elastisitas adalah perbandingan antara tegangan dan regangan yang dialami bahan. Hal itu
                                    dirumuskan dengan:
                                </p>
                                <p className="fw-bold">E = σ/e</p>
                                <p>Dimana:</p>
                                <ul>
                                    <li>E = Modulus Elastisitas (Newton/meter)</li>
                                    <li>σ = tegangan (Newton/m<sup>2</sup>)</li>
                                    <li>e = regangan</li>
                                </ul>
                                <p>
                                    <strong>Contoh Soal:</strong> 
                                    <p>Jika tegangan yang dialami adalah 200 N/m<sup>2</sup> dan regangan 0.01,
                                    berapakah modulus elastisitas yang terjadi?</p>
                                    <p>Langkah 1: Cari E</p>
                                    <p>E = σ/e</p>
                                    <p>E = 200N/m / 0.01 = 20,000</p>
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="full-width mb-4">
                        <h5 className="section-title" onClick={() => toggleVisibility(4)} style={{ cursor: 'pointer' }}> 4. Mampatan </h5>
                        {showContent[4] && (
                            <div>
                                <p>
                                    Mampatan merupakan kondisi yang hampir sama dengan regangan. Bedanya hanya berada di arah perpindahan
                                    molekul benda setelah diberi sebuah gaya tertentu. Mampatan saat diberi gaya, maka molekul benda akan
                                    terdorong ke dalam.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="full-width mb-4">
                        <h5 className="section-title" onClick={() => toggleVisibility(5)} style={{ cursor: 'pointer' }}> 5. Hubungan Antara Gaya Tarik dan Modulus Elastisitas </h5>
                        {showContent[5] && (
                            <div>
                                <p>
                                    Hubungan antara gaya tarik dengan modulus elastisitas secara matematis dirumuskan sebagai berikut:
                                </p>
                                <p className="fw-bold">(F/A) / (ΔL/Lo) = (F Lo) / (A ΔL)</p>
                                <p>Dimana:</p>
                                <ul>
                                    <li>F = Gaya (N)</li>
                                    <li>E = Modulus Elastisitas (N/m)</li>
                                    <li>σ = tegangan (N/m<sup>2</sup>)</li>
                                    <li>e = regangan</li>
                                    <li>A = luas penampang (m<sup>2</sup>)</li>
                                    <li>ΔL = pertambahan panjang (m)</li>
                                    <li>Lo = panjang mula atau awal (m)</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>
                {`
                body {
                    font-family: 'Roboto', sans-serif;
                    background-color: #f4f4f9;
                }
                .full-width {
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    margin-bottom: 20px;
                }
                .section-title {
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: #333;
                }
                `}
            </style>
        </div>
    );
}

export default Besaran;