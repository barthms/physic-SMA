import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
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
                <li className="nav-item">
                    <Link to="/fluida">Fluida</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
