import React from 'react';
import { useAuth } from './Autentifikasi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Dashboard = () => {
    const { user, logout } = useAuth(); 
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <>
        <Navbar/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card p-4 shadow-lg rounded-4">
                        <div className="card-header bg-info text-white text-center">
                            <h3>Selamat Datang, {user?.name || 'User'}</h3>
                            <p>NISN: {user?.nisn}</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="card border-primary-subtle bg-light p-3">
                                        <h5 className="card-title">Profil Siswa</h5>
                                        <p><strong>Nama:</strong> {user?.name}</p>
                                        <p><strong>Kelas:</strong> XII</p>
                                        <p><strong>Jurusan:</strong> IPS</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card border-info bg-light p-3">
                                        <h5 className="card-title">Jadwal Pelajaran</h5>
                                        <ul className="list-unstyled">
                                            <li>Senin: Matematika, Sosiologi</li>
                                            <li>Selasa: Sejarah, Agama</li>
                                            <li>Rabu: Bahasa Inggris, Ekonomi</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card border-warning bg-light p-3">
                                        <h5 className="card-title">Nilai Terakhir</h5>
                                        <ul className="list-unstyled">
                                            <li>Matematika: 89</li>
                                            <li>Ekonomi: 92</li>
                                            <li>Sosiologi: 95</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 d-flex justify-content-between">
                                <button className="btn btn-outline-primary">Lihat Semua Nilai</button>
                                <button onClick={handleLogout} className="btn btn-outline-secondary">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;
