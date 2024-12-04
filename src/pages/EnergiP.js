import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EnergiP (){
    const [showContent1, setShowContent1] = useState(false);

    return(
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-center mb-4 text-secondary fw-bold display-4">Energi Potensial Pegas</h1>
                    <div className="container">
                        <section className="full-width">
                            <h5 className="section-title">Pengertian Energi Potensial Pegas</h5>
                            <p>Energi potensial pegas ini merupakan energi yang diperlukan untuk meregangkan pegas. Besar energi potensial yang ada di sebuah pegas bisa dihitung dari grafik hubungan yang bekerja di pegas dengan pertambahan panjang pegas itu sendiri. Energi potensial elastis atau pegas adalah energi yang terdapat pada benda-benda yang memiliki sifat elastis. Energi potensial elastis terjadi karena adanya kecenderungan benda untuk tetap berada pada posisi semula.
                                Contohnya: Busur panah yang ditarik memiliki energi potensial elastisitas dalam tali busur, atau ketapel yang ditarik memiliki energi potensial elastisitas dalam tali ketapelnya.</p>
                        </section>
                        <div className="d-flex justify-content-between">
                            <div className="box col-md-6">
                                <h5 className="section-title">Rumus Energi Potensial Pegas (Ver I)</h5>
                                <img alt="Placeholder gif" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Simple_harmonic_oscillator.gif" className="img-fluid" style={{width: '10%', height:'auto'}}/>
                                <p> Ep = ½ F . x </p>
                                <p> Dimana: </p>
                                <ul>
                                    <li>Ep = Energi Potensial Pegas (Joule)</li>
                                    <li>F = Gaya yang dibutuhkan (Newton) </li>
                                    <li>x = Pertambahan panjang pegas (meter)</li>
                                </ul>
                            </div>
                            <div className="box col-md-6">
                                <h5 className="section-title">Rumus Energi Potensial Pegas (Ver II)</h5>
                                <img alt="Placeholder gif" src="https://dutafisika.wordpress.com/wp-content/uploads/2018/04/fk5uac4ir414xqh-animated-large.gif" className="img-fluid" style={{width: '35%', height:'auto'}}/>
                                <p> Ep = ½ (k . x) . x </p>
                                <p> Dimana: </p>
                                <ul>
                                    <li>Ep = Energi potensial pegas (Joule)</li>
                                    <li>k = Tetapan gaya pegas (Newton/meter)</li>
                                    <li>x = Pertambahan panjang pegas (meter)</li>
                                </ul>
                                <span className="text-danger">Rumus ini dipakai ketika F tidak diketahui namun k diketahui.</span>
                            </div>
                        </div>

                        <div className="mt-6 bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={() => setShowContent1(!showContent1)}>
                            <h3 className="text-xl font-bold mb-2">Contoh Soal</h3>
                            {showContent1 && (
                                <div>
                                    <div className="mb-4">
                                        <h5 className="text-xl font-bold mb-2">Soal Nomor 1</h5>
                                        <p>Sebuah pegas yang panjangnya 5cm ditarik dengan gaya 200N sehingga panjang pegas menjadi 6cm. Tentukan Energi potensial Pegasnya</p>
                                        <p>Langkah 1: Cari x </p>
                                        <p>x = x2 - x1</p>
                                        <span className="text-info">Ubah x1 dan x2, dari cm ke m.</span>
                                        <p>x = 0.06m - 0.05m = 0.01m </p>
                                        <p>Langkah 2: Hitung Ep </p>
                                        <p>Ep = ½ F . x</p>
                                        <p>Ep = ½ 200 N . 0.01 m = 1 Joule</p>
                                        <p>Jadi, Energi Potensial Pegasnya sebesar 1 Joule.</p>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="text-xl font-bold mb-2">Soal Nomor 2</h5>
                                        <p>Sebuah pegas tergantung vertikal pada sebuah statif. Ketika ujung bebas pegas diberi beban 300 gram, pegas bertambah panjang sebesar 4cm. Jika g = 10 m/s<sup>2</sup>, maka energi potensial pegas tersebut adalah</p>
                                        <p>Langkah 1: Cari F </p>
                                        <p>F = m . g</p>
                                        <p>F = 0.3kg ⋅ 10m/s<sup>2</sup> = 3N </p>
                                        <p>Langkah 2: Ubah x </p>
                                        <p> x = 4cm = 0.04m</p>
                                        <span className="text-info">Ubah x, dari cm ke m.</span>
                                        <p>Langkah 2: Hitung Ep </p>
                                        <p>Ep = ½ F . x</p>
                                        <p>Ep = ½ 3N . 0.04m = 0.06 Joule = 6.0 . 10<sup>-2</sup> Joule.</p>
                                        <span className="text-info">"6.0 . 10<sup>-2</sup> Joule" merupakan notasi ilmiahnya dimana anda perlu menggeser koma sebanyak 2x ke kanan, maka pangkat yang dihasilkan adalah -2.</span>
                                        <p>Jadi, Energi Potensial Pegas adalah 6.0 . 10<sup>-2</sup> Joule.</p>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="text-xl font-bold mb-2">Soal Nomor 3</h5>
                                        <p>Sebuah pegas memiliki konstanta pegas k = 800N/m. Pegas ditarik hingga bertambah panjang x = 0,1m. Tentukan Energi Potensial Pegasnya.</p>
                                        <p>Langkah 1: Cari Ep </p>
                                        <p>Ep = ½ (k . x) . x </p>
                                        <p>Ep = ½ (800 . 0.1) . 0.1 </p>
                                        <p>Ep = ½ (80) . 0.1 = 4 Joule</p>
                                        <p>Jadi, Energi Potensial Pegasnya sebesar 4 Joule.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                body {
                font-family: 'Roboto', sans-serif;
                background-color: #f4f4f9;
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
                .box img {
                border-radius: 8px;
                margin-top: 10px;
                margin-bottom: 20px;
                }
                .section-title {
                font-weight: 700;
                margin-bottom: 10px;
                color: #333;                            
                }
                .full-width {
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 20px;
                margin-bottom: 20px;
                }
                `}
            </style>
        </div>
    );
}

export default EnergiP;