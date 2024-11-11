import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./pages/Autentifikasi";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Fasilitas from "./pages/Fasilitas";


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/profil" element={<Profil/>}/>
                    <Route path="/fasilitas" element={<Fasilitas/>}/>
                    <Route path="/" element={<Login />} />
                    <Route />
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App;