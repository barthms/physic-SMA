import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import 'bootstrap/dist/css/bootstrap.css';

import Newton from "./pages/Newtonn";

import Usaha from "./pages/Usaha";


const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Beranda/>} />
                    <Route path="beranda" element={<Beranda/>} />
                    <Route path="newtonn" element ={<Newton/>} />
                    <Route path="usaha" element={<Usaha/>} />

                </Routes>
            </Router>
    )
}

export default App;