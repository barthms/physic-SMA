import React, { useState } from 'react';
import '../styling/kalUsaha.css';

const KalUsaha = () => {
    const [selectedCalc, setSelectedCalc] = useState('usaha');
    const [inputs, setInputs] = useState({ gaya: '', jarak: '', usaha: '' });
    const [hasil, setHasil] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const calculate = () => {
        const { gaya, jarak, usaha } = inputs;
        const f = parseFloat(gaya);
        const s = parseFloat(jarak);
        const w = parseFloat(usaha);

        if (selectedCalc === 'usaha' && f && s) {
            setHasil(`Usaha (W) = ${f * s} Joule`);
        } else if (selectedCalc === 'gaya' && w && s) {
            setHasil(`Gaya (F) = ${(w / s).toFixed(2)} Newton`);
        } else if (selectedCalc === 'jarak' && w && f) {
            setHasil(`Jarak (s) = ${(w / f).toFixed(2)} meter`);
        } else {
            setHasil('Masukkan nilai yang valid untuk perhitungan.');
        }
    };

    const resetForm = () => {
        setInputs({ gaya: '', jarak: '', usaha: '' });
        setHasil('');
    };

    return (
        <div className="kalusaha-container">
            <h2 className="kalusaha-title">Kalkulator Usaha</h2>

            <div className="kalusaha-field">
                <label>Pilih Variabel yang Dicari:</label>
                <select
                    value={selectedCalc}
                    onChange={(e) => {
                        setSelectedCalc(e.target.value);
                        resetForm();
                    }}
                    className="kalusaha-select"
                >
                    <option value="usaha">Hitung Usaha (W)</option>
                    <option value="gaya">Hitung Gaya (F)</option>
                    <option value="jarak">Hitung Jarak (s)</option>
                </select>
            </div>

            {selectedCalc !== 'usaha' && (
                <Input
                    label="Usaha (W) [Joule]"
                    name="usaha"
                    value={inputs.usaha}
                    onChange={handleInputChange}
                />
            )}
            {selectedCalc !== 'gaya' && (
                <Input
                    label="Gaya (F) [Newton]"
                    name="gaya"
                    value={inputs.gaya}
                    onChange={handleInputChange}
                />
            )}
            {selectedCalc !== 'jarak' && (
                <Input
                    label="Jarak (s) [meter]"
                    name="jarak"
                    value={inputs.jarak}
                    onChange={handleInputChange}
                />
            )}

            <button onClick={calculate} className="kalusaha-btn calculate">
                Hitung
            </button>

            {hasil && <div className="kalusaha-result">{hasil}</div>}

            <button onClick={resetForm} className="kalusaha-btn reset">
                Reset
            </button>

            <div className="kalusaha-info">
                <p>Rumus: W = F × s</p>
                <p>W = Usaha (Joule), F = Gaya (Newton), s = Jarak (meter)</p>
            </div>
        </div>
    );
};

const Input = ({ label, name, value, onChange }) => (
    <div className="kalusaha-field">
        <label>{label}</label>
        <input
            type="number"
            name={name}
            value={value}
            onChange={onChange}
            className="kalusaha-input"
        />
    </div>
);

export default KalUsaha;
