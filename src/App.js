import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./styling/global.css";
import './index.css';

// import Beranda from "./pages/Beranda";
import Newtonn from "./pages/Newtonn";

import Sidebar from "./components/Sidebar";
import ScrollToTop from "./renders/Scrolling";
import Hooke from './pages/Hooke';
import Usaha from "./pages/Usaha";
import GerakLurus from "./pages/GerakLurus";
import Soal from "./pages/LatihanSoal";
import GerakMelingkar from "./pages/Gerakmelingkar";
import Navbar from "./components/Navbar";

import NewtonLaws from "./pages/NewtonLaws";

import Fluida from "./pages/Fluida";
import Contoh from "./pages/contoh/Contohh";
import FluidaDinamis from "./pages/Dinamis";


import GerakJatuhBebas from "./pages/GerakJatuhBebas";
import GerakVertikalAtas from "./pages/GerakVertikalAtas";
import GerakVertikalBawah from "./pages/GerakVertikalBawah";
import GerakLurusBeraturan from "./pages/GerakLurusBeraturan";
import Fisik from "./pages/Fisik";


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
                        <Route path="/newton1" element={<NewtonLaws />} />
                        <Route path="/newton2" element={<NewtonLaws />} />
                        <Route path="/newton3" element={<NewtonLaws />} />
                        <Route path="/usaha" element={<Usaha />} />
                        <Route path="/fluida" element={<Fluida />} />
                        <Route path="/fluidaDinamis" element={<FluidaDinamis />} />
                        <Route path="/geraklurus" element={<GerakLurus />} />
                        <Route path="/gerakmelingkar" element={<GerakMelingkar />} />
                        <Route path="/GLB" element={<GerakLurus />} />
                        <Route path="/GLBB" element={<GerakLurus />} />
                        <Route path="/latihanNewton" element={<Soal />} />
                        <Route path="/contoh" element={<Contoh />} />
                        <Route path="/gerakjatuhbebas" element={<GerakJatuhBebas />} />
                        <Route path="/gerakvertikalatas" element={<GerakVertikalAtas />} />
                        <Route path="/gerakvertikalbawah" element={<GerakVertikalBawah />} />
                        <Route path="/geraklurusberaturan" element={<GerakLurusBeraturan />} />
                        <Route path="/fisik" element={<Fisik />} />

                    </Routes>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <AppContent />
        </Router>
    );
};

export default App;
