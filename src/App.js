import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./styling/global.css"; 
import Beranda from "./pages/Beranda";
import Newtonn from "./pages/Newtonn";
import Newton1 from "./pages/NewtonLaws";
import Sidebar from "./components/Sidebar";
import Hooke from './pages/Hooke';
import Usaha from "./pages/Usaha";
import GerakLurus from "./pages/GerakLurus";
import LatihanSoal from "./pages/LatihanNewton";
import GerakMelingkar from "./pages/Gerakmelingkar";
import Navbar from "./components/Navbar";
import GerakJatuhBebas from "./pages/GerakJatuhBebas";
import GerakVertikalAtas from "./pages/GerakVertikalAtas";
import GerakVertikalBawah from "./pages/GerakVertikalBawah";
import GerakLurusBeraturan from "./pages/GerakLurusBeraturan";
import Fisik from "./pages/Fisik";

const AppContent = () => {
    const location = useLocation();
    const noSidebarPaths = ["/", "/latihanNewton"];
    const showSidebar = !noSidebarPaths.includes(location.pathname);

    return (
        <div className="app-container">
            <Navbar />
            <div className={`layout-container ${showSidebar ? "with-sidebar" : "no-sidebar"}`}>
                {showSidebar && <Sidebar />}
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Beranda />} />
                        <Route path="/pages/Hooke" element={<Hooke />} />
                        <Route path="/newtonn" element={<Newtonn />} />
                        <Route path="/newton1" element={<Newton1 />} />
                        <Route path="/newton2" element={<Newton1 />} />
                        <Route path="/newton3" element={<Newton1 />} />
                        <Route path="/usaha" element={<Usaha/>} />
                        <Route path="/geraklurus" element={<GerakLurus />} />
                        <Route path="/gerakmelingkar" element={<GerakMelingkar />} />
                        <Route path="/latihanNewton" element={<LatihanSoal />} />
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
            <AppContent />
        </Router>
    );
};

export default App;
