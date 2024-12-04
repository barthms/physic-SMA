import React, { useState } from 'react';
import Sidebar from '../components/SidebarSoal';
import SoalDisplay from '../components/SoalDisplay';
import Results from '../components/Result';
import SoalList from '../components/Soal';
import '../styling/latihanSoal.css';

const LatihanSoal = () => {
    const [currentSoal, setCurrentSoal] = useState(0);
    const [jawabanUser, setJawabanUser] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAnswer = (isCorrect, index) => {
        const newJawaban = [...jawabanUser];
        newJawaban[currentSoal] = { isCorrect, selectedIndex: index };
        setJawabanUser(newJawaban);
    };

    const handleNext = () => currentSoal < SoalList.length - 1 && setCurrentSoal(currentSoal + 1);
    const handlePrev = () => currentSoal > 0 && setCurrentSoal(currentSoal - 1);
    const handleSubmit = () => setIsSubmitted(true);

    return (
        <div className="container mt-5 soal-container">
            <div className="row">
                <Sidebar
                    soalList={SoalList}
                    currentSoal={currentSoal}
                    setCurrentSoal={setCurrentSoal}
                    jawabanUser={jawabanUser}
                    isSubmitted={isSubmitted}
                />
                <div className="col-md-9">
                    {!isSubmitted ? (
                        <SoalDisplay
                            soal={SoalList[currentSoal]}
                            handleAnswer={handleAnswer}
                            jawabanUser={jawabanUser[currentSoal]}
                            currentSoal={currentSoal}
                            handlePrev={handlePrev}
                            handleNext={handleNext}
                            handleSubmit={handleSubmit}
                            isLast={currentSoal === SoalList.length - 1}
                        />
                    ) : (
                        <Results soalList={SoalList} jawabanUser={jawabanUser} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default LatihanSoal;
