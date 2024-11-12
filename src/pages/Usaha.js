import KalUsaha from '../components/KalUsaha';
import '../index.css';

const Usaha = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h1 className="text-center mb-4 text-secondary fw-bold display-4">Usaha Fisika</h1>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="card-title h4">Pengertian dan Rumus Usaha</h2>
                                <p className="card-text">
                                    Dalam ilmu fisika, usaha adalah besarnya energi atau gaya yang diberikan untuk memindahkan atau menggerakkan suatu benda atau objek. Yang dimaksud dengan memindahkan di sini artinya tempat atau letaknya yang berubah setelah dilakukan usaha.
                                </p>
                                <p className="card-text">
                                    Nah, dari penjelasan di atas bisa elo simpulkan bahwa benda yang mengalami perpindahan posisi karena diberikan gaya yang berasal dari usaha.
                                    Oleh karena itu untuk menghitung seberapa besar usaha digunakan persamaan berikut:
                                </p>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="card-title h4">Usaha pada Bidang Datar</h2>
                                <p className="card-text">
                                    Meskipun pada bidang yang datar, namun gaya yang diberikan tidak selalu lurus, yang berarti dalam kondisi tertentu gaya akan membentuk sudut tertentu, seperti gambar diatas. Oleh karena itu digunakan persamaan
                                </p>
                                <div className="alert alert-info">
                                    <strong>Rumus Usaha pada Bidang Datar</strong>
                                    <p className="mb-0">
                                        Di mana, θ = sudut yang dibentuk oleh gaya
                                    </p>
                                </div>
                            </div>



                            <div className="card-body">
                                <h2 className="card-title h4">Usaha pada Bidang Miring</h2>
                                <p className="card-text">
                                    Tidak hanya bidang datar, usaha pun dapat dilakukan pada bidang miring, salah satu contoh yang sering kita temui adalah pada saat melihat kurir yang memindahkan barang ke dalam truk menggunakan bantuan salah satu pesawat sederhana yaitu bidang miring.
                                </p>
                                <div className="alert alert-info">
                                    <strong>Rumus Usaha pada Bidang Miring</strong>
                                    <p className="mb-0">
                                        Di mana, m = massa (kg), g = gravitas (m/s²)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <KalUsaha/>
        </>
    );
};

export default Usaha;