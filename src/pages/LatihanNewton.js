import React, { useState } from 'react';
import DataSoal from '../components/NewtonSoal';
import Penjelasan from '../components/NewtonPenjelasan';
import 'bootstrap/dist/css/bootstrap.css';

const LatihanSoal = () => {
    const [soalSaatIni, setSoalSaatIni] = useState(0);
    const [skor, setSkor] = useState(0);
    const [tampilkanSkor, setTampilkanSkor] = useState(false);
    const [pilihanDipilih, setPilihanDipilih] = useState('');
    const [jawabanUser, setJawabanUser] = useState([]); 

    const pilihJawaban = (jawaban) => {
        setPilihanDipilih(jawaban);
    };

    const kirimJawaban = () => {
        const jawabanBaru = [jawabanUser];
        jawabanBaru[soalSaatIni] = pilihanDipilih;
        setJawabanUser(jawabanBaru);

        if (pilihanDipilih === DataSoal[soalSaatIni].jawaban) {
            setSkor(skor + 1);
        }

        const soalSelanjutnya = soalSaatIni + 1;
        if (soalSelanjutnya < DataSoal.length) {
            setSoalSaatIni(soalSelanjutnya);
            setPilihanDipilih('');
        } else {
            setTampilkanSkor(true);
        }
    };

    const ulangiLatihan = () => {
        setSoalSaatIni(0);
        setSkor(0);
        setTampilkanSkor(false);
        setPilihanDipilih('');
        setJawabanUser([]);
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <h2 className="text-center text-primary">Latihan Soal: Hukum Newton</h2>
                {tampilkanSkor ? (
                    <div>
                        <div className="text-center mb-4">
                            <h3>Skor Kamu: {skor} dari {DataSoal.length}</h3>
                            <button className="btn btn-primary mt-3" onClick={ulangiLatihan}>
                                Ulangi Latihan
                            </button>
                        </div>
                        <Penjelasan soal={DataSoal} jawabanUser={jawabanUser} />
                    </div>
                ) : (
                    <div>
                        <h4>{DataSoal[soalSaatIni].pertanyaan}</h4>
                        {DataSoal[soalSaatIni].pilihan.map((pilihan, index) => (
                            <div className="form-check" key={index}>
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id={`pilihan-${index}`}
                                    name="jawaban"
                                    value={pilihan}
                                    checked={pilihanDipilih === pilihan}
                                    onChange={() => pilihJawaban(pilihan)}
                                />
                                <label className="form-check-label" htmlFor={`pilihan-${index}`}>
                                    {pilihan}
                                </label>
                            </div>
                        ))}
                        <button
                            className="btn btn-success mt-3"
                            onClick={kirimJawaban}
                            disabled={!pilihanDipilih}
                        >
                            {soalSaatIni === DataSoal.length - 1 ? "Lihat Hasil" : "Jawab"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LatihanSoal;
