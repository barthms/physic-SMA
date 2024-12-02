import React from 'react';

const SoalDisplay = ({ soal, handleAnswer, jawabanUser, currentSoal, handlePrev, handleNext, handleSubmit, isLast }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h4 className="card-title">{`Soal No. ${soal.nomor}`}</h4>
                <p className="card-text">{soal.soal}</p>
                <div className="options-container">
                    {soal.jawaban.map((jawab, index) => (
                        <button
                            key={index}
                            className={`btn btn-option ${jawabanUser?.selectedIndex === index ? 'selected' : ''}`}
                            onClick={() => handleAnswer(jawab.benar, index)}
                        >
                            <span className="option-label">{String.fromCharCode(65 + index)}</span>
                            {jawab.text}
                        </button>
                    ))}
                </div>
                <div className="mt-4 d-flex justify-content-between">
                    <button className="btn btn-secondary" onClick={handlePrev} disabled={currentSoal === 0}>
                        Prev
                    </button>
                    {isLast ? (
                        <button className="btn btn-success" onClick={handleSubmit}>
                            Submit
                        </button>
                    ) : (
                        <button className="btn btn-primary" onClick={handleNext}>
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SoalDisplay;
