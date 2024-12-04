import React from 'react';

const Sidebar = ({ soalList, currentSoal, setCurrentSoal, jawabanUser, isSubmitted }) => {
    return (
        <div className="col-md-3">
            <h5 className="sidebar-title">Nomor Soal</h5>
            <div className="list-group">
                {soalList.map((soal, index) => (
                    <button
                        key={index}
                        className={`list-group-item list-group-item-action ${
                            currentSoal === index ? 'active' : ''
                        }`}
                        onClick={() => !isSubmitted && setCurrentSoal(index)}
                        disabled={isSubmitted}
                    >
                        <span className={`status-icon ${jawabanUser[index] ? 'answered' : ''}`}></span>
                        {soal.nomor}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
