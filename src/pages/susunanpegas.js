import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SusunanPegas(){
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);

    return (
        <>
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-center mb-4 text-secondary fw-bold display-4"> Hukum Hooke pada Susunan Pegas</h1>

                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Pengertian Hukum Hooke pada Susunan Pegas</h2>
                        <p className="text-lg">Hukum Hooke pada susunan pegas adalah hukum fisika yang menyatakan bahwa pertambahan panjang pegas berbanding lurus dengan gaya tarik yang diberikan, selama gaya tarik tersebut tidak melampaui batas elastisitas bahan.</p>
                        <p className="text-lg">Susunan pegas sendiri terbagi menjadi dua jenis, yaitu:</p>
                    </div>

                    <div className="uniques-columns">
                        <div className="column-left">
                            <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer" onClick={() => setShowContent1 (!showContent1)}>
                                <h3 className="text-xl font-bold mb-2">Susunan Pegas Seri</h3>
                                <p>Susunan seri ini merupakan kondisi dimana dua pegas mengalami tetapan pegas yang sama dalam sebuah rangkaian seri, maka panjang dari pegas itu akan berubah menjadi 2 kali lipat. Persamaannya adalah:</p>
                                <p> Ks = ½ k </p>
                                <p> Dimana: </p>
                                <ul>
                                    <li> Ks = Persamaan Pegas </li>
                                    <li> k = konstanta pegas (N/m) </li>
                                </ul>
                                {showContent1 && (
                                    <div>
                                        <p> Sementara persamaan untuk pegas yang disusun secara seri adalah:</p>
                                        <p> Ks = k/n </p>
                                        <p> Dimana: </p>
                                        <ul>
                                            <li> Ks = Persamaan Pegas </li>
                                            <li> k = konstanta pegas (N/m) </li>
                                            <li> n = Jumlah pegas</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="column-right">
                            <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer" onClick={() => setShowContent2(!showContent2)}>
                                <h3 className="text-xl font-bold mb-2">Susunan Pegas Paralel</h3>
                                <p> Susunan paralel adalah kondisi ketika pegas disusun paralel maka pegas akan tetap seperti bentuk awal, tetapi luas dari penampangnya berubah menjadi 2x lipat dari semula jika pegas disusun dua buah. Persamaannya adalah:</p>
                                <p> Kp = 2k</p>
                                <p> Dimana:</p>
                                <ul>
                                    <li> Kp = Persamaan pegas pada susunan paralel </li>
                                    <li> k = konstanta pegas (N/m) </li>
                                </ul>
                                {showContent2 && (
                                    <div>
                                        <p> Sedangkan persamaan juka pegas memiliki tetapan yang sama dan disusun secara paralel persamaannya adalah:</p>
                                        <p> Kp = nk </p>
                                        <p> Dimana: </p>
                                        <ul>
                                            <li> Kp = Persamaan pegas pada susunan paralel </li>
                                            <li> k = konstanta pegas (N/m) </li>
                                            <li> n = Jumlah pegas </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                body {
                background-color: #f7f9fc;
                font-family: 'Arial', sans-serif;
                color: #343a40;
                margin: 0;
                padding: 0;
                }

                .container-fluid {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
                }

                .display-4 {
                font-size: 2.8rem;
                font-weight: 700;
                color: #34495e;
                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
                }

                .bg-white {
                background-color: #ffffff;
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                padding: 20px;
                transition: all 0.3s ease-in-out;
                position: relative;
                overflow: hidden;
                }

                .bg-white::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 100%;
                background: rgba(52, 152, 219, 0.1);
                z-index: 0;
                transition: width 0.5s ease;
                }

                .bg-white:hover::before {
                width: 100%;
                }

                .bg-white:hover {
                transform: translateY(-10px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }

                .text-lg {
                font-size: 1.2rem;
                color: #495057;
                line-height: 1.8;
                }

                .unique-columns {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 20px;
                margin-top: 20px;
                }

                .column-left, .column-right {
                width: 48%;
                cursor: pointer;
                transform: scale(1);
                transition: transform 0.3s ease;
                width: 100%
                }

                .column-left:hover, .column-right:hover {
                transform: scale(1.05);
                }

                h2, h3 {
                color: #2c3e50;
                font-weight: bold;
                }

                h3 {
                font-size: 1.6rem;
                }

                ul {
                list-style-type: disc;
                padding-left: 20px;
                }

                ul li {
                margin-bottom: 10px;
                color: #6c757d;
                }

                .cursor-pointer {
                position: relative;
                }

                .cursor-pointer::after {
                position: absolute;
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
                color: #3498db;
                font-size: 1.2rem;
                transition: transform 0.3s ease;
                }

                .cursor-pointer:hover::after {
                transform: translateY(-50%) rotate(90deg);
                }

                button {
                display: inline-block;
                padding: 10px 20px;
                background: linear-gradient(135deg, #3498db, #2ecc71);
                color: #ffffff;
                border: none;
                border-radius: 5px;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
                transition: background 0.3s ease, transform 0.3s ease;
                }

                button:hover {
                background: linear-gradient(135deg, #2ecc71, #3498db);
                transform: scale(1.1);
                }
                `}
            </style>
        </div>
        </>
    );
}

export default SusunanPegas;