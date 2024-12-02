import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./styling/global.css"; 

import Beranda from "./pages/Beranda";
import Newtonn from "./pages/Newtonn";

import Sidebar from "./components/Sidebar";
import Hooke from './pages/Hooke';
import Usaha from "./pages/Usaha";
import GerakLurus from "./pages/GerakLurus";
import LatihanSoal from "./pages/LatihanNewton";
import GerakMelingkar from "./pages/Gerakmelingkar";
import Navbar from "./components/Navbar";
import Newton1 from "./pages/newton1"; 
import FluidaStatic from "./pages/fluida";



// import Fluida from "./pages/Fluida";
import Contoh from "./pages/contoh/Contoh";

const AppContent = () => {
    const location = useLocation();
    const noSidebarPaths = ["/", "/latihanNewton", '/contoh'];
    const showSidebar = !noSidebarPaths.includes(location.pathname);

    return (
        <div className="app-container">
            <Navbar />
            <div className={`layout-container ${showSidebar ? "with-sidebar" : "no-sidebar"}`}>
                {showSidebar && <Sidebar />}
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Contoh />} />
                        <Route path="/pages/Hooke" element={<Hooke />} />
                        <Route path="/newtonn" element={<Newtonn />} />
                        <Route path="/newton1" element={<Newton1 />} />
                        <Route path="/newton2" element={<Newton1 />} />
                        <Route path="/newton3" element={<Newton1 />} />
                        <Route path="/usaha" element={<Usaha/>} />
                        <Route path="/fluida" element={<FluidaStatic />} />
                        <Route path="/geraklurus" element={<GerakLurus />} />
                        <Route path="/gerakmelingkar" element={<GerakMelingkar />} />
                        <Route path="/GLB" element={<GerakLurus />} />
                        <Route path="/GLBB" element={<GerakLurus />} />
                        <Route path="/latihanNewton" element={<LatihanSoal />} />
                        <Route path="/contoh" element={<Contoh />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
