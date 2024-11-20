import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/sidebar.css';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`wrapper ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <button
                className="toggle-btn"
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
            >
            </button>

            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
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
                        </li>
                        <li className="nav-item">
                            <Link to="/newtonn" className="nav-link">
                                <i className="fas fa-atom"></i>
                                <span>Hukum Newton</span>
                            </Link>
                            <ul className="sub-nav-list">
                                <li>
                                    <Link to="/newton1" className="nav-link-small">
                                        <span>Jenis Hukum Newton</span>
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
                    </ul>
                </nav>
                <div className="sidebar-header">
                    <h3>Latihan Soal</h3>
                </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/latihanNewton" className="nav-link">
                                <i className="fas fa-arrow-right"></i>
                                <span>Hukum Newton</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/latihanHook" className="nav-link">
                                <i className="fas fa-arrow-right"></i>
                                <span>Hukum Hook</span>
                            </Link>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Sidebar;