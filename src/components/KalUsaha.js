import React, { useState } from 'react';
import '../index.css';

const Usaha = () => {
    const [gaya, setGaya] = useState('');
    const [jarak, setJarak] = useState('');
    const [hasil, setHasil] = useState('');

    const hitungUsaha = () => {
        if (gaya && jarak) {
            const gayaAngka = parseFloat(gaya);
            const jarakAngka = parseFloat(jarak);
            const usaha = gayaAngka * jarakAngka;
            setHasil(usaha);
        }
    };

    const handleGayaChange = (e) => {
        setGaya(e.target.value);
    };

    const handleJarakChange = (e) => {
        setJarak(e.target.value);
    };

    const resetForm = () => {
        setGaya('');
        setJarak('');
        setHasil('');
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg p-4 border-0 rounded-3">
                        <h2 className="text-center text-dark mb-4">
                            Rumus Usaha Fisika
                        </h2>
                        
                        <div className="mb-3">
                            <label className="form-label">Gaya (Newton)</label>
                            <input
                                type="number"
                                value={gaya}
                                onChange={handleGayaChange}
                                className="form-control"
                                placeholder="Masukkan besaran gaya"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Jarak (m)</label>
                            <input
                                type="number"
                                value={jarak}
                                onChange={handleJarakChange}
                                className="form-control"
                                placeholder="Masukkan jarak"
                            />
                        </div>

                        <button
                            className="btn btn-primary w-100 mb-3"
                            onClick={hitungUsaha}
                        >
                            Hitung Usaha
                        </button>

                        {hasil && (
                            <div className="alert alert-success text-center" role="alert">
                                Hasil Usaha: {hasil} Joule
                            </div>
                        )}

                        <button
                            className="btn btn-danger w-100"
                            onClick={resetForm}
                        >
                            Reset
                        </button>

                        <div className="mt-4 p-3 bg-light border rounded">
                            <h5 className="text-center">Rumus Usaha:</h5>
                            <p className="text-center">W = F x s</p>
                            <p className="text-center">Dimana:</p>
                            <ul className="list-unstyled text-center">
                                <li>W = Usaha (Joule)</li>
                                <li>F = Gaya (Newton)</li>
                                <li>s = Jarak/Perpindahan (m)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usaha;