import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./styling/global.css";
import './index.css';
import Newtonn from "./pages/Newtonn";
import Sidebar from "./components/Sidebar";
import Hooke from './pages/Hooke';
import Usaha from "./pages/Usaha";
import GerakLurus from "./pages/GerakLurus";
import Soal from "./pages/LatihanSoal";
import GerakMelingkar from "./pages/Gerakmelingkar";
import Navbar from "./components/Navbar";
import SuhudanKalor from "./pages/Suhu"; // Sesuaikan path jika berbeda



import NewtonLaws from "./pages/NewtonLaws";
import Fluida from "./pages/Fluida";
import Contoh from "./pages/contoh/Contohh";
import FluidaDinamis from "./pages/Dinamis";

import EnergiPotensial from "./pages/EnergiP";
import Besaran from "./pages/Besaran";
import SusunanPegas from "./pages/susunanpegas";
import GerakJatuhBebas from "./pages/GerakJatuhBebas";
import GerakVertikalAtas from "./pages/GerakVertikalAtas";
import GerakVertikalBawah from "./pages/GerakVertikalBawah";
import Fisik from "./pages/Fisik";



const AppContent = () => {
    const location = useLocation();
    const noSidebarPaths = ["/", "/latihansoal", '/contoh'];
    const showSidebar = !noSidebarPaths.includes(location.pathname);

    return (
        <div className="app-container">
            <Navbar />
            <div className={`layout-container ${showSidebar ? "with-sidebar" : "no-sidebar"}`}>
                {showSidebar && <Sidebar />}
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Contoh />} />
                        {/* <Route path="beranda" element={<Beranda />} /> */}
                        <Route path="/pages/Hooke" element={<Hooke />} />
                        <Route path="/newtonn" element={<Newtonn />} />
                        <Route path="/newton1" element={<NewtonLaws />} />
                        <Route path="/usaha" element={<Usaha />} />
                        <Route path="/fluida" element={<Fluida />} />
                        <Route path="/dinamis" element={<FluidaDinamis />} />
                        <Route path="/fluidaDinamis" element={<FluidaDinamis />} />
                        <Route path="/geraklurus" element={<GerakLurus />} />
                        <Route path="/gerakmelingkar" element={<GerakMelingkar />} />
                        <Route path="/GLB" element={<GerakLurus />} />
                        <Route path="/GLBB" element={<GerakLurus />} />
                        <Route path="/latihansoal" element={<Soal />} />
                        <Route path="/pages/suhudankalor" element={<SuhudanKalor/>}/>
                        <Route path="/pages/EnergiP" element={<EnergiPotensial/>}/>
                        <Route path="/pages/Besaran" element={<Besaran/>}/>
                        <Route path="/pages/susunanpegas" element={<SusunanPegas/>}/>
                        <Route path="/pages/GerakJatuhBebas" element={<GerakJatuhBebas/>}/>
                        <Route path="/pages/GerakVertikalAtas" element={<GerakVertikalAtas/>}/>
                        <Route path="/pages/GerakVertikalBawah" element={<GerakVertikalBawah/>}/>
                        <Route path="/Fisik" element={<Fisik />} />

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