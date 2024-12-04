import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "react-bootstrap";

const Hooke = () => {
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-center mb-4 text-secondary fw-bold display-4">Hukum Hooke</h1>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title h4">Pengertian Hukum Hooke</h2>
                            <p className="card-text">
                            Hukum Hooke merupakan suatu hukum atau ketentuan tentang gaya yang ada di dalam bidang ilmu fisika yang terjadi karena adanya sifat elastisitas dari sebuah pegas. 
                            Menurut Robert Hooke, seorang ilmuwan yang menemukan Hukum Hooke, benda dibedakan menjadi dua jenis, antara lain benda yang bersifat plastis dan benda yang bersifat elastis. 
                            Dimana benda yang bersifat plastis adalah benda yang mengalami perubahan ketika dikenai gaya dan benda itu tidak bisa kembali ke bentuk semula setelah gaya yang diberikan hilang. 
                            Sementara untuk benda elastis adalah benda yang mengalami perubahan ketika dikenai gaya dan benda itu bisa kembali ke bentuk semula ketika gaya tersebut dihilangkan
                            </p>
                            <p className="card-text">
                            Robert Hooke melakukan sebuah percobaan untuk mengamati hubungan antara perubahan yang terjadi di antara benda elastis dan gaya yang diberikan kepada benda tersebut. 
                            Dari percobaan tersebut, Hooke menemukan sebuah hukum tentang hubungan antara gaya dan perubahan gaya pegas yang sekarang dikenal dengan Hukum Hooke. 
                            Besar gaya hooke tersebut secara proporsional akan berbanding lurus dengan gaya tariknya.
                            </p>
                        </div>
                    </div>
                    <Accordion defaultActiveKey="0">
                        <AccordionItem eventKey="0">
                            <AccordionHeader>Rumus Hukum Hooke</AccordionHeader>
                            <AccordionBody>
                                <p> Pada umumnya, apa yang ditemukan oleh Hooke dapat dinyatakan sebagai berikut: </p>
                                <p> F = k . Δx </p>
                                <p> Dimana: </p>
                                <ul>
                                    <li>F = Gaya yang diberikan pada pegas (Newton) </li>
                                    <li>k = Tetapan gaya pegas (Newton/meter)</li>
                                    <li>Δx = Pertambahan panjang pegas (meter)</li>
                                </ul>
                                <p> Melalui rumus tersebut diketahui bahwa pertambahan panjang akan muncul ketika gaya tarik menarik dilakukan. Namun, pertambahan panjang itu juga bergantung pada material dari pegas tersebut.
                                    Misalnya, sebuah pegas yang terbuat dari baja akan sulit memanjang atau meregang walaupun sudah diberi gaya tarik yang besar.
                                    Hal tersebut bisa terjadi karena masing-masing pegas memiliki karakteristik yang disebut dengan tetapan gaya. Artinya, tetapan gaya yang dimiliki oleh barang seperti karet kecil karena lebih mudah untuk meregang.
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title h4">Pengertian Energi Potensial Pegas</h2>
                            <p className="card-text">
                            Energi potensial pegas ini merupakan energi yang diperlukan untuk meregangkan pegas. Besar energi potensial yang ada di sebuah pegas bisa dihitung dari grafik hubungan yang bekerja di pegas dengan pertambahan panjang pegas itu sendiri.
                            </p>
                        </div>
                    </div>
                        <AccordionItem eventKey="1">
                            <AccordionHeader>Rumus Energi Potensial</AccordionHeader>
                            <AccordionBody>
                                <p> Ep = ½ F . x = ½ (k . x) . x </p>
                                <p> Dimana: </p>
                                <ul>
                                    <li>Ep = energi potensial pegas (Joule)</li>
                                    <li>k = tetapan gaya pegas (Newton/meter)</li>
                                    <li>x = pertambahan panjang pegas (meter)</li>
                                    <li>F = Gaya yang dibuthkan (Newton) </li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title h4">Pengertian Besaran Hukum Hooke</h2>
                            <p className="card-text">
                            Besaran hukum Hooke adalah gaya yang dibutuhkan untuk mengubah bentuk pegas, seperti meregangkan atau memampatkan, yang berbanding lurus dengan jarak perubahan bentuk. Hukum hooke mempunyai suatu besaran yang dapat kamu pelajari, diantaranya adalah:
                            </p>
                        </div>
                    </div>
                        <AccordionItem eventKey="2">
                            <AccordionHeader> Besaran Hukum Hooke</AccordionHeader>
                            <AccordionBody>
                                <h5>1. Tegangan</h5>
                                <p> Tegangan merupakan suatu kondisi dari suatu benda yang mengalami pertambahan panjang saat suatu benda diberikan sebuah gaya di salah satu ujungnya, sementara ujung lainnya ditahan. Berikut ini adalah rumus tegangan:</p>
                                <p >σ = F/A</p>
                                <p> Dimana: </p>
                                <ul>
                                    <li> σ = tegangan (Newton/m<sup>2</sup>)</li>
                                    <li> F = gaya (N)</li>
                                    <li> A = luas penampang (m<sup>2</sup>)</li>
                                </ul>
                                <h5>2. Regangan</h5>
                                <p>Regangan merupakan sebuah perbandingan antara pertambahan panjang kawat dalam x meter dan panjang normal kawat dalam x meter. Munculnya suatu regangan karena ada gaya yang diberikan kepada benda ataupun kawat yang dihilangkan. Sehingga kawat itu akan kembali ke bentuk semula. Berikut ini adalah rumus regangan:</p>
                                <p>e = ΔL/ Lo</p>
                                <p> Dimana: </p>
                                <ul>
                                    <li> e = regangan</li>
                                    <li> ΔL = pertambahan panjang (meter)</li>
                                    <li> Lo = panjang mula atau awal (m)</li>
                                </ul>
                                <h5>3. Modulus Elastisitas</h5>
                                <p> Modulus elastisitas adalah perbandingan antara tegangan dan regangan yang dialami bahan. Hal itu dirumuskan dengan:</p>
                                <p> E = σ/e</p>
                                <p> Dimana: </p>
                                <ul>
                                    <li> E = Modulus Elastisitas (Newton/meter)</li>
                                    <li> σ = tegangan (Newton/m<sup>2</sup>)</li>
                                    <li> e = regangan </li>
                                </ul>
                                <h5>4. Mampatan </h5>
                                <p> Mampatan merupakan kondisi yang hampir sama dengan regangan. Bedanya hanya berada di arah perpindahan molekul benda setelah diberi sebuah gaya tertentu. Mampatan saat diberi gaya, maka molekul benda akan terdorong ke dalam.</p>
                                <h5>5. Hubungan Antara Gaya Tarik dan Modulus Elastisitas</h5>
                                <p>Hubungan antara gaya tarik dengan modulus elastisitas secara matematis dirumuskan sebagai berikut:</p>
                                <p> (F/A) / (ΔL/Lo) = (F Lo) / (A ΔL)</p>
                                <p> Dimana: </p>
                                <ul>
                                    <li>F= Gaya (N)</li>
                                    <li>E = Modulus Elastisitas (N/m)</li>
                                    <li>σ = tegangan (N/m2)</li>
                                    <li>e = regangan</li>
                                    <li>A = luas penampang (m2)</li>
                                    <li>ΔL = pertambahan panjang (m)</li>
                                    <li>Lo = panjang mula atau awal (m)</li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title h4">Pengertian Hukum Hooke pada Susunan Pegas</h2>
                            <p className="card-text">
                            Hukum Hooke pada susunan pegas adalah hukum fisika yang menyatakan bahwa pertambahan panjang pegas berbanding lurus dengan gaya tarik yang diberikan, selama gaya tarik tersebut tidak melampaui batas elastisitas bahan. Susunan pegas sendiri terbagi menjadi dua jenis, yaitu:
                            </p>
                        </div>
                    </div>
                        <AccordionItem eventKey="3">
                            <AccordionHeader>Susunan Pegas</AccordionHeader>
                            <AccordionBody>
                                <h5>1. Susunan Seri </h5>
                                <p>Susunan seri ini merupakan kondisi dimana dua pegas mengalami tetapan pegas yang sama dalam sebuah rangkaian seri, maka panjang dari pegas itu akan berubah menjadi 2 kali lipat. Persamaannya adalah:</p>
                                <p> Ks = ½ k </p>
                                <p> Dimana: </p>
                                <ul>
                                    <li> Ks = Persamaan Pegas </li>
                                    <li> k = konstanta pegas (N/m) </li>
                                </ul>
                                <p> Sementara persamaan untuk pegas yang disusun secara seri adalah:</p>
                                <p> Ks = k/n </p>
                                <p> Dimana: </p>
                                <ul>
                                    <li> Ks = Persamaan Pegas </li>
                                    <li> k = konstanta pegas (N/m) </li>
                                    <li> n = Jumlah pegas</li>
                                </ul>
                                <h5> 2. Susunan Paralel </h5>
                                <p> Susunan paralel adalah kondisi ketika pegas disusun paralel maka pegas akan tetap seperti bentuk awal, tetapi luas dari penampangnya berubah menjadi 2x lipat dari semula jika pegas disusun dua buah. Persamaannya adalah:</p>
                                <p> Kp = 2k</p>
                                <p> Dimana:</p>
                                <ul>
                                    <li> Kp = Persamaan pegas pada susunan paralel </li>
                                    <li> k = konstanta pegas (N/m) </li>
                                </ul>
                                <p> Sedangkan persamaan juka pegas memiliki tetapan yang sama dan disusun secara paralel persamaannya adalah:</p>
                                <p> Kp = nk </p>
                                <p> Dimana: </p>
                                <ul>
                                    <li> Kp = Persamaan pegas pada susunan paralel </li>
                                    <li> k = konstanta pegas (N/m) </li>
                                    <li> n = Jumlah pegas </li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hooke;