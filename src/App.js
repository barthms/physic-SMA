import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Beranda/>} />
                    <Route path="beranda" element={<Beranda/>} />
                </Routes>
            </Router>
    )
}

export default App;