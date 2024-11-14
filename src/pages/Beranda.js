import React from 'react';
import BerandaAtas from '../components/BerandaAtas';
import BerandaBawah from '../components/BerandaBawah';
import foto3 from '../assets/foto3.jpg'
import foto4 from '../assets/foto4.jpeg'

const Beranda = () => {
    return (
        <>
            <div className="mb-5">
                <BerandaAtas />
            </div>
            <div className="mb-5">
                <BerandaBawah
                    intro="Penerapan Fisika dalam Kehidupan Sehari-hari"
                    image={foto3}
                    title="Contoh Penerapan Fisika"
                    description={
                        <>
                            <p>Fisika bukan hanya dipelajari di ruang kelas, tetapi juga banyak diterapkan dalam kehidupan sehari-hari. Berikut adalah beberapa contoh penerapan fisika yang sering kita temui:</p>
                            <ul>
                                <li><strong>Pergerakan Mobil:</strong> Ketika kita mengendarai mobil, kita memanfaatkan hukum gerak Newton yang menjelaskan bagaimana mobil bergerak, berhenti, atau berbelok. Misalnya, saat mobil berhenti mendadak, kita merasakan gaya dorong ke depan karena hukum inersia.</li>
                                <li><strong>Elektronik Rumah Tangga:</strong> Setiap alat elektronik seperti televisi, kulkas, dan ponsel bekerja berdasarkan prinsip fisika, terutama dalam aliran listrik dan magnetisme. Tanpa listrik, perangkat ini tidak akan berfungsi.</li>
                                <li><strong>Penerbangan Pesawat:</strong> Pesawat terbang berkat prinsip aerodinamika, di mana gaya angkat yang dihasilkan oleh sayap pesawat memungkinkan pesawat untuk terbang di udara. Hal ini melibatkan pemahaman tentang tekanan udara dan gaya angkat.</li>
                                <li><strong>Hukum Archimedes dalam Perahu:</strong> Ketika kita melihat sebuah perahu mengapung di atas air, itu adalah contoh penerapan hukum Archimedes yang menjelaskan bahwa benda yang lebih berat dari air akan terangkat oleh gaya dorong air jika bentuk dan massa benda sesuai.</li>
                                <li><strong>Peralatan Dapur:</strong> Dalam kehidupan sehari-hari, kita juga memanfaatkan fisika ketika menggunakan alat-alat dapur, seperti ketika memasak air dengan menggunakan kompor. Proses perpindahan panas dari kompor ke panci adalah contoh penerapan konduksi.</li>
                            </ul>
                        </>
                    }
                />
            </div>
            <div className="mb-5">
                <BerandaBawah
                    intro="Apa manfaat Fisika?"
                    image={foto4}
                    title="Manfaat Belajar Fisika"
                    description={
                        <ol>
                            <li>Fisika membantu kita berpikir logis dan analitis dalam memecahkan masalah sehari-hari, seperti mengatasi masalah teknis atau memahami fenomena alam di sekitar kita.</li>
                            <li>Belajar fisika meningkatkan pemahaman kita tentang cara kerja teknologi modern, dari ponsel hingga kendaraan yang kita gunakan setiap hari.</li>
                            <li>Fisika juga membuka peluang karir di berbagai bidang, mulai dari teknologi, rekayasa, kedokteran, hingga luar angkasa.</li>
                            <li>Dengan mempelajari fisika, kita dapat berkontribusi pada inovasi baru yang bermanfaat bagi kehidupan manusia, seperti penemuan alat-alat baru, teknologi ramah lingkungan, dan pengembangan medis.</li>
                        </ol>
                    }
                />
            </div>
            <div>
                <button></button>
            </div>
        </>
    );
};

export default Beranda;
