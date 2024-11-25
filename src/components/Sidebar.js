import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/sidebar.css';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State untuk mengelola status sidebar

    // Fungsi untuk toggle status sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Tombol untuk membuka/menutup sidebar */}
            <button
                className="toggle-btn"
                onClick={toggleSidebar}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: isSidebarOpen ? '320px' : '20px', // Menyesuaikan posisi tombol toggle
                    transition: 'left 0.3s ease',
                    zIndex: 1001,
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                {isSidebarOpen ? '←' : '→'}
            </button>

            {/* Sidebar */}
            <div
                className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
                style={{
                    width: isSidebarOpen ? '300px' : '0', // Mengatur lebar sidebar
                    transition: 'width 0.3s ease',
                    display: 'grid',
                }}
            >
                <div className="sidebar-header">
                    <h3>Materi Pembelajaran</h3>
                </div>
                <nav className="sidebar-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="fas fa-home"></i>
                                <span>Beranda</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pages/Hooke" className="nav-link">
                                <i className="fas fa-spring"></i>
                                <span>Hukum Hooke</span>
                            </Link>
                            <ul className="sub-nav">
                                <li>
                                    <Link to="/EnergiP" className="nav-link">
                                    <i className="fas fa-atom"></i>
                                    <span>Energi Potensial Pegas</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Besaran" className="nav-link">
                                    <i className="fas fa-atom"></i>
                                    <span>Besaran Hukum Hooke</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/newtonn" className="nav-link">
                                <i className="fas fa-atom"></i>
                                <span>Hukum Newton</span>
                            </Link>
                            <ul className="sub-nav">
                                <li>
                                    <Link to="/newton1" className="nav-link">
                                        <span>Hukum Newton 1</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/usaha" className="nav-link">
                                <i className="fas fa-cogs"></i>
                                <span>Usaha</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/geraklurus" className="nav-link">
                                <i className="fas fa-arrow-right"></i>
                                <span>Gerak Lurus</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/suhu" className="nav-link">
                                <i className="fas fa-arrow-right"></i>
                                <span>Suhu dan Kalor</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;