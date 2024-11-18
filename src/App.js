import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Beranda from "./pages/Beranda";
import 'bootstrap/dist/css/bootstrap.css';
import Newtonn from "./pages/Newtonn";
import Newton1 from "./pages/newton1"; 


const App = () => {

    return (

            <Router>

                <Routes>

                    <Route path="/" element={<Beranda/>} />

                    <Route path="beranda" element={<Beranda/>} />

                    <Route path="newtonn" element ={<Newtonn/>} />

                    <Route path="newton1" element={<Newton1 />} />

                </Routes>

            </Router>

    )

}



export default App;