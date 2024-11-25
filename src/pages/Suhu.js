import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "react-bootstrap";

const SuhudanKalor = () => {
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-center mb-4 text-secondary fw-bold display-4">Suhu dan Kalor</h1>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title h4">Pengertian Suhu</h2>
                            <p className="card-text">
                                Dalam ilmu fisika, suhu adalah salah satu besaran dalam fisika yang menyatakan keadaan derajat dari suatu benda. 
                                Dalam ilmu fisika, perhitungan suhu ini bisa dilakukan dengan bantuan alat ukur suhu, yaitu termometer. Termometer sendiri ada beberapa macam, yaitu termometer suhu. Lalu, satuan suhu sendiri bisa tandai dengan skala Celcius, Remus, Fahrenheit, dan Kelvin.
                            </p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title h4">Pengertian Kalor</h2>
                            <p className="card-text">
                                Kalor merupakan salah satu bentuk dari energi yang dapat berpindah dari suatu benda yang memiliki suhu tinggi ke benda dengan suhu yang rendah jika kedua suhu tersebut saling bercampur.
                                Oleh karena itu, dapat dikatakan bahwa kalor itu bukanlah energi panas, tetapi suatu bentuk energi yang dapat mengalir dari satu benda ke benda lainnya. Perpindahan kalor ini dipengaruhi oleh suhu. Seperti air, kalor secara alamiah dapat berpindah dari benda bersuhu tinggi ke benda bersuhu rendah.
                                Dalam kalor, terdapat istilah kalor jenis (c) yaitu banyaknya kalor yang diperlukan atau dilepaskan untuk menaikkan atau menurunkan suhu satu satuan massa zat tersebut. Selain kalor jenis, terdapat kapasitas kalor yang merupakan banyaknya kalor yang diperlukan atau dilepaskan untuk mengubah suhu benda sebesar satu satuan suhu.
                                Nah, satuan kalor sendiri adalah Joule, Kalor, atau Kalori, ya. 
                            </p>
                        </div>
                        <AccordionItem eventKey="0">
                            <AccordionHeader> Perpindahan Kalor dalam Keseharian</AccordionHeader>
                            <AccordionBody>
                                <h5>1. Konduksi</h5>
                                <p> Konduksi merupakan hantaran kalor dari satu benda ke benda lain tanpa adanya perpindahan partikel atau zat. Nah, dalam proses konduksi ini, terdapat 2 jenis benda yang dapat menghantarkan kalor, yaitu konduktor dan isolator. 
                                    Benda-benda yang dapat menghantarkan panas dengan baik disebut dengan konduktor. Sementara itu, benda-benda yang kurang dapat menghantarkan panas dengan baik disebut dengan isolator. 
                                    Beberapa bentuk konduktor yang dapat temukan dalam keseharian adalah besi, timah, baja, alumunium, emas, perak, dan sebagainya. Kemudian, beberapa bentuk isolator yang dapat kita temukan adalah kayu, styrofoam, bata, air, dan sebagainya. </p>
                                <h5>2. Konveksi</h5>
                                <p> Jika konduksi merupakan cara perpindahan kalor tanpa adanya perpindahan partikel zat, konveksi justru sebaliknya. Konveksi merupakan hantaran kalor dari satu benda ke benda lainnya yang disertai dengan perpindahan partikel zat. 
                                    Contoh perpindahan kalor konveksi dalam keseharian bisa kamu lihat pada saat memasak air. Pada saat memasak air, air yang dibawah akan bersuhu lebih panas dibandingkan air bagian atas.
                                    Nah, pada saat itu, air panas yang ada di bawah memiliki kerapatan rendah sehingga air tersebut akan naik. Sebaliknya, air dingin yang ada di atas memiliki kerapatan tinggi sehingga air tersebut akan turun. 
                                    Hal ini menandakan adanya perpindahan kalor dari air bawah ke bagian atas yang menyebabkan partikel zat air tersebut berpindah dari atas ke bawah. Peristiwa inilah yang disebut dengan konveksi. </p>
                                <h5>3. Radiasi</h5>
                                <p> Berjalan di bawah terik matahari tentunya terasa panas dan gerah, ya. Tapi, pernah tidak kamu bertanya-tanya bagaimana panas matahari bisa terasa di bumi, padahal jaraknya jauh sekali? Nah, perpindahan kalor dari panas matahari ke bumi ini disebut dengan perpindahan kalor radiasi. 
                                    Radiasi merupakan salah satu cara perpindahan kalor tanpa menggunakan menggunakan materi lain atau melalui ruang hampa. Perpindahan kalor radiasi sendiri juga dipengaruhi oleh suhu benda yang menyerap radiasi. 
                                    Misalnya, jika kamu duduk di dekat api unggun, tubuh kamu bersuhu lebih rendah daripada api unggun, sehingga tubuh dapat menyerap radiasi kalor dengan baik. </p>   
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="1">
                            <AccordionHeader> Rumus Suhu  </AccordionHeader>
                            <AccordionBody>
                                <h5>1. Rumus Konversi Suhu dan Perbandingan</h5>
                                <p> Dimana: </p>
                                <ul>
                                    <li> x1= titik beku x </li>
                                    <li> x2= titik didih x </li>
                                    <li> y1= titik beku y </li>
                                    <li> y2= titik didih y </li>
                                </ul>
                                <h5>2. Rumus Suhu Akhir Campuran</h5>
                                <p> Dimana: </p>
                                <ul>
                                    <li> Tc = suhu campuran</li>
                                    <li> m1 m2 = massa larutan 1 dan 2</li>
                                    <li> T1 T2 = suhu larutan 1 dan 2</li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="2">
                            <AccordionHeader> Rumus Kalor  </AccordionHeader>
                            <AccordionBody>
                                <h5>1. Rumus Kalor Jenis</h5>
                                <p> Dimana: </p>
                                <ul>
                                    <li> Q= kalor (J) </li>
                                    <li> c= kalor jenis (J/ kg K) </li>
                                    <li> m= massa benda(kg) </li>
                                    <li> T= perubahan suhu (K) </li>
                                </ul>
                                <h5>2. Rumus Kapasitas Kalor </h5>
                                <p> Dimana: </p>
                                <ul>
                                    <li> C= kapasitas kalor </li>
                                    <li> Q= kalor (J) </li>
                                    <li> c= kalor jenis (J/ kg K) </li>
                                    <li> m= massa benda(kg) </li>
                                    <li> T= perubahan suhu (K) </li>
                                </ul>
                                <h5>3. Rumus Kalor Laten </h5>
                                <p> Dimana: </p>
                                <ul>
                                    <li> L= kalor laten lebur (J/ kg) </li>
                                    <li> Q= kalor (J) </li>
                                    <li> m= massa benda(kg) </li>
                                    <li> U= kalor laten uap (J/ kg) </li>
                                </ul>
                                <h5>4. Rumus Asas Black </h5>
                                <p> Dimana: </p>
                                <ul>
                                    <li> L= kalor laten lebur (J/ kg) </li>
                                    <li> Q= kalor (J) </li>
                                    <li> m= massa benda(kg) </li>
                                    <li> U= kalor laten uap (J/ kg) </li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SuhudanKalor;