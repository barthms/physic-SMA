import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Sidebar from "./components/Sidebar";
import Hooke from './pages/Hooke';
import 'bootstrap/dist/css/bootstrap.css'; 

const App = () => {
    return (
        <> 
            <Router>
                <div className="d-flex vh-110">
                    <div className="sidebar bg-light p-3" style={{ minWidth: '250px'}}><Sidebar /></div>
                    <div className="content flex-grow-1 d-flex flex-column">
                        <div className="flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Beranda/>} />
                            <Route path="/pages/Hooke" element={<Hooke/>} />
                        </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default App;