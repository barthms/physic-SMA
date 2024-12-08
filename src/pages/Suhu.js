import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/beranda.css';

const SuhudanKalor = () => {

        const [temperatureC, setTemperatureC] = useState(0); // State untuk suhu dalam Celcius
        const [temperatureF, setTemperatureF] = useState(32); // State untuk Fahrenheit
        const [temperatureK, setTemperatureK] = useState(273.15); // State untuk Kelvin
    
        // Fungsi untuk mengonversi suhu
        const convertTemperature = (tempC) => {
            setTemperatureF((tempC * 9) / 5 + 32); // Celcius ke Fahrenheit
            setTemperatureK(tempC + 273.15); // Celcius ke Kelvin
        };
    
        // Fungsi untuk meningkatkan suhu
        const increaseTemperature = () => {
            if (temperatureC < 100) {
                const newTemp = temperatureC + 10;
                setTemperatureC(newTemp);
                convertTemperature(newTemp);
            }
        };
    
        // Fungsi untuk menurunkan suhu
        const decreaseTemperature = () => {
            if (temperatureC > 0) {
                const newTemp = temperatureC - 10;
                setTemperatureC(newTemp);
                convertTemperature(newTemp);
            }
        };
    
        // Fungsi untuk mengatur suhu secara manual
        const handleInputChange = (e) => {
            const inputTemp = parseFloat(e.target.value) || 0; // Menghindari NaN
            setTemperatureC(inputTemp);
            convertTemperature(inputTemp);
        };    

    return (
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h1 className="text-center mb-4 text-primary fw-bold display-4">Suhu dan Kalor</h1>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold mb-4">Pengertian Suhu</h2>
                                <p className="card-text">
                                    Dalam ilmu fisika, suhu adalah salah satu besaran dalam fisika yang menyatakan keadaan derajat dari suatu benda. 
                                    Dalam ilmu fisika, perhitungan suhu ini bisa dilakukan dengan bantuan alat ukur suhu, yaitu termometer. Termometer sendiri ada beberapa macam, yaitu termometer suhu. 
                                    Lalu, satuan suhu sendiri bisa tandai dengan skala Celcius, Remus, Fahrenheit, dan Kelvin.
                                </p>
                            </div>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold mb-4">Pengertian Kalor</h2>
                                <p className="card-text">
                                    Kalor merupakan salah satu bentuk dari energi yang dapat berpindah dari suatu benda yang memiliki suhu tinggi ke benda dengan suhu yang rendah jika kedua suhu tersebut saling bercampur.
                                    <br />
                                    Dalam kalor, terdapat istilah kalor jenis (c), yaitu banyaknya kalor yang diperlukan atau dilepaskan untuk menaikkan atau menurunkan suhu satu satuan massa zat tersebut. 
                                    Selain kalor jenis, terdapat kapasitas kalor yang merupakan banyaknya kalor yang diperlukan atau dilepaskan untuk mengubah suhu benda sebesar satu satuan suhu.
                                    Nah, satuan kalor sendiri adalah Joule, Kalor, atau Kalori.
                                </p>
                            </div>
                        </div>
                        
                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className= "text-2xl font-bold mb-4"> Perpindahan Kalor dalam Keseharian</h2>
                                <p className="card-text">
                                    <h5>1. Konduksi</h5>
                                    <p>
                                        Konduksi merupakan hantaran kalor dari satu benda ke benda lain tanpa adanya perpindahan partikel atau zat. 
                                        Dalam proses konduksi ini, terdapat 2 jenis benda yang dapat menghantarkan kalor, yaitu konduktor dan isolator.
                                        <br />
                                        Beberapa bentuk konduktor yang dapat ditemukan dalam keseharian adalah besi, timah, baja, alumunium, emas, perak, dan sebagainya. 
                                        Kemudian, beberapa bentuk isolator yang dapat kita temukan adalah kayu, styrofoam, bata, air, dan sebagainya.
                                    </p>
                                    <h5>2. Konveksi</h5>
                                    <p>
                                        Konveksi merupakan hantaran kalor dari satu benda ke benda lainnya yang disertai dengan perpindahan partikel zat.
                                        <br />
                                        Contoh perpindahan kalor konveksi dalam keseharian bisa kamu lihat pada saat memasak air. Air panas yang ada di bawah memiliki kerapatan rendah sehingga naik, sementara air dingin yang memiliki kerapatan tinggi akan turun. Peristiwa ini adalah konveksi.
                                    </p>
                                    <h5>3. Radiasi</h5>
                                    <p>
                                        Radiasi merupakan salah satu cara perpindahan kalor tanpa menggunakan materi lain atau melalui ruang hampa. 
                                        Contohnya adalah perpindahan kalor dari matahari ke bumi.
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className="box col-md-6">
                                <h2 className= "text-2xl font-bold mb-4">Rumus Suhu</h2>
                                    <h5>1. Rumus Konversi Suhu dan Perbandingan</h5>
                                    <ul>
                                        <li>x1 = titik beku x</li>
                                        <li>x2 = titik didih x</li>
                                        <li>y1 = titik beku y</li>
                                        <li>y2 = titik didih y</li>
                                    </ul>
                                    <h5>2. Rumus Suhu Akhir Campuran</h5>
                                    <ul>
                                        <li>Tc = suhu campuran</li>
                                        <li>m1, m2 = massa larutan 1 dan 2</li>
                                        <li>T1, T2 = suhu larutan 1 dan 2</li>
                                    </ul>    
                            </div>
                        
                            <div className="box col-md-6">
                                <h2 className= "text-2xl font-bold mb-4">Rumus Kalor</h2>
                                    <h5>1. Rumus Kalor Jenis</h5>
                                    <ul>
                                        <li>Q = kalor (J)</li>
                                        <li>c = kalor jenis (J/kg K)</li>
                                        <li>m = massa benda (kg)</li>
                                        <li>ΔT = perubahan suhu (K)</li>
                                    </ul>
                            </div>
                        </div>

                        <div className="app">
                            <div className="thermometer">
                                <div
                                className="mercury"
                                style={{
                                    height: `${temperatureC}%`,
                                    backgroundColor: temperatureC > 50 ? "red" : "blue", // Warna berubah sesuai suhu
                                    transition: "height 0.5s, background-color 0.5s",
                                }}>
                                </div>
                                <div className="temperature-label">{temperatureC}°C</div>
                            </div>

                            <div className="controls">
                                <button onClick={increaseTemperature}>Naikkan Suhu</button>
                                <button onClick={decreaseTemperature}>Turunkan Suhu</button>
                                <input
                                    type="number"
                                    placeholder="Masukkan suhu (°C)"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="conversion">
                                <p>
                                    <strong>Fahrenheit:</strong> {temperatureF.toFixed(2)}°F
                                </p>
                                <p>
                                    <strong>Kelvin:</strong> {temperatureK.toFixed(2)}K
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <style>
                    {`
                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        background: linear-gradient(to top, #e0f7fa, #ffccbc);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }

                    .app {
                        text-align: center;
                    }

                    .thermometer {
                        width: 80px;
                        height: 300px;
                        background: #ccc;
                        border: 3px solid #444;
                        border-radius: 40px;
                        position: relative;
                        overflow: hidden;
                        margin-bottom: 20px;
                    }

                    .mercury {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        background: red;
                        border-radius: 40px;
                        transition: height 0.5s ease-out;
                    }

                    .temperature-label {
                        position: absolute;
                        top: 10px;
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 18px;
                        font-weight: bold;
                        color: #444;
                    }

                    .controls {
                        display: flex;
                        gap: 10px;
                    }

                    button {
                        padding: 10px 20px;
                        font-size: 16px;
                        color: white;
                        background: #444;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }

                    button:hover {
                        background: #666;
                    }

                    input[type="number"] {
                        padding: 10px;
                        font-size: 16px;
                        width: 100%;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        text-align: center;
                    }

                    .conversion p {
                        font-size: 16px;
                        margin: 5px 0;
                        color: #444;
                    }
                    .box {
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        transition: transform 0.3s ease;
                    }
                    .box:hover {
                        transform: translateY(-5px);
                    }
                    `}
                </style>
            </div>
    );
};

export default SuhudanKalor;