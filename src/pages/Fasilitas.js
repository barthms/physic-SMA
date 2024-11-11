import React from 'react';
import Navbar from '../components/Navbar';
import FasilitasCard from '../components/FasilitasCard';
import labImage from '../assets/Fasilitas-Lab Komputer.jpg';
import libraryImage from '../assets/Fasilitas-Perpustakaan-3.jpg';
import sportsImage from '../assets/Kegiatan2.jpg';

const Fasilitas = () => {
    const fasilitasData = [
        {
            image: labImage,
            title: 'Laboratorium Komputer',
            description: 'Laboratorium komputer kami dilengkapi dengan perangkat keras dan lunak terbaru untuk mendukung pembelajaran berbasis teknologi.',
        },
        {
            image: libraryImage,
            title: 'Perpustakaan',
            description: 'Perpustakaan sekolah menyediakan berbagai koleksi buku dan sumber daya belajar untuk memperluas wawasan siswa.',
        },
        {
            image: sportsImage,
            title: 'Lapangan Olahraga',
            description: 'Lapangan olahraga yang luas untuk berbagai kegiatan olahraga seperti sepak bola, basket, dan atletik.',
        }
    ];

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="text-center mb-5">Fasilitas Sekolah</h2>
                <div className="row">
                    {fasilitasData.map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <FasilitasCard 
                                image={item.image} 
                                title={item.title} 
                                description={item.description} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Fasilitas;
