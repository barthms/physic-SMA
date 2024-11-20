import React from 'react';


const Dashboard = () => {
    
    return (
        <div className="dashboard-container">
            <header className="hero-section">
                <h1 className="main-title">Selamat Datang di Portal Fisika</h1>
                <p className="subtitle">Jelajahi Dunia Fisika Bersama Kami</p>
            </header>
            
            <div className="featured-topics">
                <div className="topic-card">
                    <i className="fas fa-atom"></i>
                    <h2>Mekanika</h2>
                    <p>Pelajari konsep gerak, gaya, dan energi</p>
                </div>
                <div className="topic-card">
                    <i className="fas fa-bolt"></i>
                    <h2>Elektromagnetik</h2>
                    <p>Eksplorasi listrik dan magnet</p>
                </div>
                <div className="topic-card">
                    <i className="fas fa-wave-square"></i>
                    <h2>Gelombang</h2>
                    <p>Pahami getaran dan gelombang</p>
                </div>
            </div>

            <section className="latest-experiments">
                <h2>Eksperimen Terbaru</h2>
                <div className="experiment-grid">
                    <div className="experiment-card">
                        <img src="/images/experiment1.jpg" alt="Eksperimen Pendulum" />
                        <h3>Pendulum Sederhana</h3>
                        <p>Mengukur periode dan frekuensi getaran</p>
                    </div>
                    <div className="experiment-card">
                        <img src="/images/experiment2.jpg" alt="Eksperimen Listrik" />
                        <h3>Rangkaian Listrik</h3>
                        <p>Memahami hukum Ohm</p>
                    </div>
                </div>
            </section>

            <section className="physics-quote">
                <blockquote>
                    "Fisika adalah puisi alam semesta yang ditulis dalam bahasa matematika"
                    <footer>- Galileo Galilei</footer>
                </blockquote>
            </section>
        </div>    );
    

}

export default Dashboard;