import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Beranda from "./pages/Beranda";
import Newtonn from "./pages/Newtonn";
import Newton1 from "./pages/newton1";
import Sidebar from "./components/Sidebar";
import Hooke from './pages/Hooke';
import Usaha from "./pages/Usaha";
import GerakLurus from "./pages/GerakLurus";
import LatihanSoal from "./pages/LatihanNewton";
import Dashboard from "./pages/Dashboard";
import Fluida from "./pages/Fluida";

const App = () => {
    return (
        <Router>
            <div>
                <>
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Beranda/>} />
                        <Route path="/beranda" element={<Beranda />} />
                        <Route path="/pages/Hooke" element={<Hooke />} />
                        <Route path="/newtonn" element={<Newtonn />} />
                        <Route path="/newton1" element={<Newton1 />} />
                        <Route path="/newton2" element={<Newton1 />} />
                        <Route path="/newton3" element={<Newton1 />} />
                        <Route path="/usaha" element={<Usaha />} />
                        <Route path="/geraklurus" element={<GerakLurus />} />
                        <Route path="/GLB" element={<GerakLurus />} />
                        <Route path="/GLBB" element={<GerakLurus />} />
                        <Route path="/latihanNewton" element={<LatihanSoal />} />
                        <Route path="/fluida" element={<Fluida/>}/>
                    </Routes>
                </div>
                </>
            </div>
        </Router>
    );
};

export default App;
