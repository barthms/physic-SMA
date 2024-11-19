import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Sidebar = () => {
    const [dashboardMenuNewtonOpen, setDashboardMenuNewtonOpen] = useState(false);
    const toggleDashboardMenuNewton = () => setDashboardMenuNewtonOpen(!dashboardMenuNewtonOpen);

    const [dashboardMenuGerakLurusOpen, setDashboardMenuGerakLurusOpen] = useState(false);
    const toggleDashboardMenuGerakLurus = () => setDashboardMenuGerakLurusOpen(!dashboardMenuGerakLurusOpen);

    return (
        <>
        <div style={sidebarStyle}>
            <h3 style={{ textAlign: 'center', cursor: 'pointer' }} onClick={toggleDashboardMenuNewton}>{dashboardMenuNewtonOpen? 'Hukum Newton' : 'Hukum Newton'}</h3>
            {dashboardMenuNewtonOpen && (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        <Link to="/sub-hukum1" style={linkStyle}>Hukum Newton 1</Link>
                    </li>
                    <li>
                        <Link to="/sub-hukum2" style={linkStyle}>Hukum Newton 2</Link>
                    </li>
                    <li>
                        <Link to="/sub-hukum3" style={linkStyle}>Hukum Newton 3</Link>
                    </li>
                </ul>
            )}
        </div>

        <div style={sidebarStyle}>
            <h3 style={{textAlign: 'center', cursor: 'pointer'}} onClick={toggleDashboardMenuGerakLurus}>{dashboardMenuGerakLurusOpen? 'Gerak Lurus' : 'Gerak Lurus'}</h3>
            {dashboardMenuGerakLurusOpen && (
                <ul style={{listStyleType: 'none', padding: 0}}>
                    <li>
                        <Link to="/GLB" style={linkStyle}>GLB</Link>
                    </li>
                    <li>
                        <Link to="/GLB" style={linkStyle}>GLB</Link>
                    </li>
                </ul>
            )}
        </div>

        <h3 style={{ textAlign: 'center' }}><Link to="/pages/Hooke" style={linkStyle}>Hukum Hooke</Link></h3>
        </>
    );
};

// Definisi gaya sidebar
const sidebarStyle = {
    width: '250px',
    backgroundColor: '#f4f4f4',
    color:'black',
    padding: '10px',
    borderRight: '1px solid #ddd',
};

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    display: 'block',
    padding: '10px',
    marginBottom: '10px',
  };

export default Sidebar;