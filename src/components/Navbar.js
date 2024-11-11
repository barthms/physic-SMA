import React from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';
import logo from '../assets/Logo1.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo Sekolah" />
            </div>
            <ul className="navbar-menu">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profil">Profil</Link></li>
                <li><Link to="/fasilitas">Fasilitas</Link></li>
                <li><Link to="">Gallery</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
