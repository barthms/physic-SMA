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


const App = () => {

    return (
        <>
            <Router>
                <div className="d-flex vh-110">
                    <div className="sidebar bg-light p-3" style={{ minWidth: '250px' }}><Sidebar /></div>
                    <div className="content flex-grow-1 d-flex flex-column">
                        <div className="flex-grow-1">
                            <Routes>
                                <Route path="/" element={<Beranda />} />
                                <Route path="/pages/Hooke" element={<Hooke />} />
                                <Route path="/" element={<Beranda />} />
                                <Route path="beranda" element={<Beranda />} />
                                <Route path="newtonn" element={<Newtonn />} />
                                <Route path="newton1" element={<Newton1 />} />
                                <Route path="usaha" element={<Usaha />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    )
};