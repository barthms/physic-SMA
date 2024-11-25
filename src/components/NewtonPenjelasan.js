import React from 'react';

const Penjelasan = ({ soal, jawabanUser }) => {
    return (
        <div>
            <h4 className="text-center text-info">Penjelasan Soal</h4>
            {soal.map((item, index) => (
                <div key={index} className="mb-3">
                    <h5>
                        {index + 1}. {item.pertanyaan}
                    </h5>
                    <p>
                        <strong>Jawaban Benar:</strong> {item.jawaban}
                    </p>
                    <p>
                        <strong>Jawaban Anda:</strong> {jawabanUser[index] || "Tidak Dijawab"}
                    </p>
                    <p>
                        <strong>Penjelasan:</strong> {item.penjelasan}
                    </p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Penjelasan;
