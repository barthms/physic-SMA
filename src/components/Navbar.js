import { Link } from "react-router-dom";
import LogoWeb from '../assets/logoWeb.png';
import '../styling/navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={LogoWeb} alt="Logo website" />
            </div>
        <ul className="navbar-menu">
            <li><Link to='/'>Beranda</Link></li>
            <li><Link to='/pages/Hooke'>Materi</Link></li>
            <li><Link to='/latihanNewton'>Latihan</Link></li>
        </ul>
    </nav>
    );

}

export default Navbar;