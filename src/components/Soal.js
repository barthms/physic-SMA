const SoalList = [
    {
        nomor: 1,
        soal: "Sebuah benda bergerak dengan kecepatan 10 m/s dan massa 2 kg. Berapa energi kinetiknya?",
        jawaban: [
            { text: "50 Joule", benar: true },
            { text: "100 Joule", benar: false },
            { text: "200 Joule", benar: false },
            { text: "20 Joule", benar: false }
        ],
        penjelasan: "Energi kinetik dapat dihitung dengan rumus Ek = 1/2 mv^2"
    },
    {
        nomor: 2,
        soal: "Jika gaya 5 Newton bekerja pada sebuah benda dengan massa 2 kg, berapa percepatan benda tersebut?",
        jawaban: [
            { text: "2 m/s^2", benar: true },
            { text: "10 m/s^2", benar: false },
            { text: "5 m/s^2", benar: false },
            { text: "1 m/s^2", benar: false }
        ],
        penjelasan: "Percepatan dapat dihitung dengan rumus a = F/m"
    }
    // Tambahkan soal lainnya sesuai kebutuhan
];

export default SoalList;
