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
    }

    const handleGayaChange = (e) => {
        setGaya(e.target.value);
    }

    const handleJarakChange = (e) => {
        setJarak(e.target.value);
    }

    const resetForm = () => {
        setGaya('');
        setJarak('');
        setHasil('');
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <h2 className="text-2xl font-bold mb-6 text-center">Rumus Usaha</h2>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Gaya (Newton)
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="number"
                                        value={gaya}
                                        onChange={handleGayaChange}
                                        placeholder="Masukkan besaran gaya"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Jarak (m)
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="number"
                                        value={jarak}
                                        onChange={handleJarakChange}
                                        placeholder="Masukkan jarak"
                                    />
                                </div>

                                <button
                                    className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                    onClick={hitungUsaha}
                                >
                                    Hitung Usaha
                                </button>

                                {hasil && (
                                    <div className="mt-4 p-4 bg-green-100 rounded-lg">
                                        <p className="text-center d-inline p-2 text-bg-secondary ">
                                            Hasil Usaha: {hasil} Joule
                                        </p>
                                    </div>
                                )}
                                <button

                                    className="mt-4 mb-3 bg-secondary hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                    onClick={resetForm}
                                >
                                    Reset
                                </button>


                                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                                    <h3 className="font-bold mb-2">Rumus Usaha:</h3>
                                    <p>W = F x s</p>
                                    <p className="mt-2">Dimana:</p>
                                    <ul className="list-disc ml-6">
                                        <li>W = Usaha (Joule)</li>
                                        <li>F = Gaya (Newton)</li>
                                        <li>s = Jarak/Perpindahan (m)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usaha;