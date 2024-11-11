import React from 'react';
import ProfilAtas from '../components/ProfilAtas';
import ProfilBawah from '../components/ProfilBawah';
import profil1 from '../assets/Kegiatan7.jpg';
import profil2 from '../assets/Sekolah.jpg';
import Navbar from '../components/Navbar';
import '../components/profil.css';

const Profil = () => {
    return (
        <>
            <Navbar />
            <div className="mb-5">
                <ProfilAtas />
            </div>
            <div className="mb-5">
                <ProfilBawah
                    image={profil1}
                    title="Visi SMA Negeri 3 Tarutung"
                    description="Menjadi lembaga pendidikan yang unggul dalam membentuk generasi berkarakter, berintegritas, dan berwawasan global, melalui pendidikan yang berkualitas dan berbasis teknologi."
                />
            </div>
            <div className="mb-5">
                <ProfilBawah
                    image={profil2}
                    title="Misi SMA Negeri 3 Tarutung"
                    description={
                        <ol>
                            <li>Meningkatkan kualitas pembelajaran yang berfokus pada pengembangan potensi siswa.</li>
                            <li>Menciptakan lingkungan belajar yang inklusif, inovatif, dan kondusif.</li>
                            <li>Membekali siswa dengan keterampilan abad ke-21, termasuk berpikir kritis, kolaborasi, dan kreativitas.</li>
                            <li>Mendorong partisipasi aktif siswa dalam kegiatan akademik dan non-akademik untuk membentuk karakter yang unggul.</li>
                            <li>Menjalin kerja sama dengan berbagai pihak untuk meningkatkan mutu pendidikan.</li>
                        </ol>
                    }
                />
            </div>
        </>
    );
};

export default Profil;
