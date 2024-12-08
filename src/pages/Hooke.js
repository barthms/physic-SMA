import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Robert from '../assets/Robert.jpg';
import '../styling/Hooke.css';
import '../styling/beranda.css';

function Hooke() {
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);
    const [showContent4, setShowContent4] = useState(false);

    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-center mb-4 fw-bold display-4">Hukum Hooke</h1>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Pengertian Hukum Hooke</h2>
                            <div className="flex-container">
                                <div className="text-container">
                                    <p className="text-lg">
                                        Hukum Hooke merupakan suatu hukum atau ketentuan tentang gaya yang ada di dalam bidang ilmu fisika yang terjadi karena adanya sifat elastisitas dari sebuah pegas. 
                                        Menurut Robert Hooke, seorang ilmuwan yang menemukan Hukum Hooke, benda dibedakan menjadi dua jenis, antara lain benda yang bersifat plastis dan benda yang bersifat elastis. 
                                        Dimana benda yang bersifat plastis adalah benda yang mengalami perubahan ketika dikenai gaya dan benda itu tidak bisa kembali ke bentuk semula setelah gaya yang diberikan hilang. 
                                        Sementara untuk benda elastis adalah benda yang mengalami perubahan ketika dikenai gaya dan benda itu bisa kembali ke bentuk semula ketika gaya tersebut dihilangkan
                                    </p>
                                    <p className="text-lg">
                                        Robert Hooke melakukan sebuah percobaan untuk mengamati hubungan antara perubahan yang terjadi di antara benda elastis dan gaya yang diberikan kepada benda tersebut. 
                                        Dari percobaan tersebut, Hooke menemukan sebuah hukum tentang hubungan antara gaya dan perubahan gaya pegas yang sekarang dikenal dengan Hukum Hooke. 
                                        Besar gaya hooke tersebut secara proporsional akan berbanding lurus dengan gaya tariknya.
                                    </p>
                                </div>
                                <div className="image-container">
                                    <figure>
                                        <img src={Robert} alt="Robert Hooke" width="200" height="200"/>
                                        <figcaption className="caption">Robert Hooke adalah seorang ilmuwan Inggris yang menemukan sel pertama kali pada tahun 1665. Ia juga dikenal sebagai penemu Hukum Hooke pada tahun 1660 yang menjelaskan hubungan antara gaya dan perubahan panjang pegas.</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={() => setShowContent1(!showContent1)}>
                                <h3 className="text-xl font-bold mb-2">Rumus Hukum Hooke</h3>
                                <p>Umumnya: F = k . Δx</p>
                                {showContent1 && <div>
                                    <p>Dimana:
                                    <ul>
                                        <li>F = Gaya yang diberikan pada pegas (Newton) </li>
                                        <li>k = Tetapan gaya pegas (Newton/meter)</li>
                                        <li>Δx = Pertambahan panjang pegas (meter)</li>
                                    </ul>
                                    <span style={{color:'red'}}>Namun ini akan berubah tergantung soalnya.</span></p></div>}
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer" onClick={() => setShowContent2(!showContent2)}>
                                <h3 className="text-xl font-bold mb-2">Mencari k</h3>
                                <p>Umumnya: k = F/Δx</p>
                                {showContent2 && <div>
                                    <p>Dimana:
                                    <ul>
                                        <li>F = Gaya yang diberikan pada pegas (Newton) </li>
                                        <li>Δx = Pertambahan panjang pegas (meter)</li>
                                    </ul>
                                    <span style={{color:'red'}}>Namun ini akan berubah tergantung soalnya.</span></p></div>}
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer" onClick={() => setShowContent3(!showContent3)}>
                                <h3 className="text-xl font-bold mb-2">Mencari Δx </h3>
                                <p>Umumnya: Δx = F/k</p>
                                {showContent3 && <div>
                                    <p>Dimana:
                                    <ul>
                                        <li>F = Gaya yang diberikan pada pegas (Newton) </li>
                                        <li>k = Tetapan gaya pegas (Newton/meter)</li>
                                    </ul>
                                    <span style={{color:'red'}}>Namun ini akan berubah tergantung soalnya.</span></p></div>}
                            </div>
                        </div>

                        <div className="mt-6 bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={() => setShowContent4(!showContent4)}>
                            <h3 className="text-xl font-bold mb-2">Contoh Soal</h3>
                            {showContent4 && (
                                <>
                                <div>
                                    <h5 className="text-xl font-bold mb-2">Soal Nomor 1</h5>
                                    <p>Sebuah pegas dengan konstanta k = 250 N/m memiliki panjang awal L0 = 0.4m. Ketika gaya F diberikan, panjang pegas menjadi L = 0.7m. Berapakah gaya F yang diberikan pada pegas?</p>
                                    <p>Langkah 1: Cari Δx </p>
                                    <p>Δx = L - L0</p>
                                    <p>Δx = 0.7m - 0.4m = 0.3m </p>
                                    <p>Langkah 2: Hitung F </p>
                                    <p>F = k ⋅ Δx</p>
                                    <p>F = 250N/m ⋅ 0.3m = 75N</p>
                                    <p>Jadi, gaya yang diberikan pada pegas adalah 75N.</p>
                                </div>
                                <div>
                                    <h5 className="text-xl font-bold mb-2">Soal Nomor 2</h5>
                                    <p>Sebuah pegas digantung vertikal dan ditarik dengan gaya hingga panjangnya bertambah Δx = 0.25m dari panjang semula. Jika massa benda yang digantung pada pegas adalah m = 5kg dan percepatan gravitasi g = 9.8m/s<sup>2</sup>, tentukan nilai k (konstanta pegas) dari pegas tersebut.</p>
                                    <p>Langkah 1: Cari F </p>
                                    <p>F = m . g</p>
                                    <p>F = 5kg ⋅ 9.8m/s<sup>2</sup> = 49N </p>
                                    <p>Langkah 2: Hitung k </p>
                                    <p>k = F / Δx</p>
                                    <p>k = 49N / 0.25m = 196N/m</p>
                                    <p>Jadi, konstanta pegas k adalah 196N/m.</p>
                                </div>
                                <div>
                                    <h5 className="text-xl font-bold mb-2">Soal Nomor 3</h5>
                                    <p>Sebuah pegas dengan konstanta k = 300N/m digunakan untuk menggantungkan sebuah benda. Pegas ini memanjang sebanyak Δx ketika benda dengan massa m = 10kg digantung padanya. Jika percepatan gravitasi g = 9.8m/s<sup>2</sup>, tentukan panjang perpanjangan (Δx) pegas tersebut.</p>
                                    <p>Langkah 1: Cari F </p>
                                    <p>F = m . g</p>
                                    <p>F = 10kg ⋅ 9.8m/s<sup>2</sup> = 98N </p>
                                    <p>Langkah 2: Hitung Δx</p>
                                    <p>Δx = F / k</p>
                                    <p>Δx = 98N / 300N/m = 0.327m</p>
                                    <p>Jadi, perpanjangan pegas Δx adalah 0.327m atau 32.7cm.</p>
                                </div>
                                </>
                            )}
                        </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hooke;