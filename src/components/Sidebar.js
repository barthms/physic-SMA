import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/sidebar.css";

const Sidebar = () => {
    const [isFluidaOpen, setIsFluidaOpen] = useState(false); // State untuk dropdown Fluida

    // Fungsi untuk toggle dropdown Fluida
    const toggleFluida = () => {
        setIsFluidaOpen((prev) => !prev);
    };

    return (
        <div className={`sidebar`}>
            <div className="sidebar-header">
                <h3>Materi Fisika</h3>
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/pages/Hooke">Hukum Hooke</Link>
                </li>
                <li className="nav-item">
                    <Link to="/newtonn">Hukum Newton</Link>
                </li>
                <li className="nav-item">
                    <Link to="/usaha">Usaha dan Energi</Link>
                </li>
                <li className="nav-item">
                    <Link to="/geraklurus">Gerak Lurus</Link>
                </li>
                <li className="nav-item">
                    <Link to="/gerakmelingkar">Gerak Melingkar</Link>
                </li>
                {/* Dropdown untuk Fluida */}
                <li className="nav-item">
                    <button 
                        className="nav-link dropdown-toggle" 
                        onClick={toggleFluida}
                    >
                        Fluida
                    </button>
                    {isFluidaOpen && (
                        <ul className="dropdown-list">
                            <li className="dropdown-item">
                                <Link to="/fluida">Fluida Statis</Link>
                            </li>
                            <li className="dropdown-item">
                                <Link to="/fluidaDinamis">Fluida Dinamis</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
