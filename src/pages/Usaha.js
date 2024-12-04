import React from 'react';
import KalUsaha from '../components/KalUsaha';
import Video from '../components/Video';
import '../styling/usaha.css';

const Usaha = () => {
    return (
        <>
            <div className="container-fluid mt-5 usaha-container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h1 className="text-center mb-4 text-primary fw-bold display-4 animate__animated animate__fadeInDown">
                            <em>Usaha dalam Fisika</em>
                        </h1>
                        <div className="card mb-4 shadow-lg animate__animated animate__fadeInUp">
                            <div className="card-body">
                                <h2 className="card-title h4">Apa Itu Usaha?</h2>
                                <p className="card-text">
                                    Usaha adalah konsep penting dalam fisika yang digunakan untuk menggambarkan transfer energi akibat gaya yang bekerja pada suatu objek. 
                                    Ketika sebuah benda berpindah akibat pengaruh gaya, maka usaha telah dilakukan.
                                </p>
                                <div className="text-center p-3 bg-info text-white rounded shadow-sm">
                                    <blockquote className="blockquote">
                                        "Usaha tidak hanya tentang gaya, tapi juga tentang perpindahan!"
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-4 shadow-lg animate__animated animate__fadeInUp">
                            <div className="card-body">
                                <h2 className="card-title h4">Aplikasi Usaha dalam Kehidupan</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        **Mengangkat Barang:** Saat Anda mengangkat tas dari lantai ke meja, Anda melakukan usaha karena ada perpindahan benda dengan gaya tertentu.
                                    </li>
                                    <li className="list-group-item">
                                        **Mendorong Mobil:** Saat Anda mendorong mobil yang mogok, usaha dilakukan untuk memindahkan mobil tersebut.
                                    </li>
                                    <li className="list-group-item">
                                        **Olahraga:** Saat seseorang mengangkat barbel, otot memberikan gaya untuk mengatasi gravitasi, sehingga usaha dilakukan.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="card mb-4 shadow-lg animate__animated animate__fadeInUp">
                            <div className="card-body">
                                <h2 className="card-title h4">Fakta Menarik tentang Usaha</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        Usaha tidak dilakukan jika benda tidak berpindah, bahkan jika gaya telah diterapkan.
                                    </li>
                                    <li className="list-group-item">
                                        Usaha adalah besaran skalar, artinya hanya memiliki nilai dan tidak memiliki arah.
                                    </li>
                                    <li className="list-group-item">
                                        Jika gaya tegak lurus terhadap perpindahan, maka usaha yang dilakukan adalah nol.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="accordion mb-4 animate__animated animate__fadeInUp" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Mengapa Rumus Usaha Sangat Sederhana?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Rumus usaha sederhana karena hanya melibatkan hubungan dasar antara gaya dan jarak, tanpa mempertimbangkan arah atau faktor eksternal lainnya.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Bagaimana Usaha Berbeda dengan Energi?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Usaha adalah transfer energi yang terjadi akibat gaya dan perpindahan. Sementara energi adalah kapasitas untuk melakukan usaha.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                        </div>
                    </div>
                </div>
            </div>
            <Video />
            <KalUsaha />
        </>
    );
};

export default Usaha;
