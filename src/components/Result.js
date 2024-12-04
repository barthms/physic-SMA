import React from 'react';

const Results = ({ soalList, jawabanUser }) => {
    const correctAnswers = jawabanUser.filter((jawab) => jawab?.isCorrect).length;

    return (
        <div className="results mt-5 p-4 rounded bg-light shadow-sm">
            <h4>Hasil Ujian</h4>
            <p>Jumlah Jawaban Benar: {correctAnswers} dari {soalList.length}</p>
            <div>
                {soalList.map((soal, index) => (
                    <div key={index} className="result-item">
                        <p>
                            <strong>{`Soal No. ${soal.nomor}:`}</strong>{' '}
                            {jawabanUser[index]?.isCorrect ? 'Benar' : 'Salah'}
                        </p>
                        <p className={`result-explanation ${jawabanUser[index]?.isCorrect ? 'text-success' : 'text-danger'}`}>
                            {soal.penjelasan}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;
