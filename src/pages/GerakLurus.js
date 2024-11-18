import React from "react";
import Perpindahan from '../assets/Perpindahan.jpg';
import Jarak from '../assets/Jarak.jpg';
import "./GerakLurus.css";


const GerakLurus = () => {
  const data = [
    {
    

      title:"Pengertian Gerak Lurus",
      content: (
      <>
      gerak suatu benda pada lintasan yang lurus. Dalam gerak lurus terdapat lima besaran penting yaitu jarak, perpindahan, kelajuan, kecepatan dan percepatan. Sementara itu, pada gerak lurus berdasarkan karakteristik kecepatan gerak benda, gerak lurus dibedakan menjadi dua, yaitu gerak lurus beraturan (GLB) dan gerak lurus berubah beraturan (GLBB). Dan gerak lurus berubah beraturan dalam penerapannya dibedakan menjadi tiga, yaitu gerak jatuh bebas (GJB), gerak vertikal ke bawah (GVB) dan gerak vertikal ke atas (GVA).
      <h3> Penerapan Gerak lurus dalam kehidupan sehari hari:</h3>
    <ul>
      <li>
        <strong>Transportasi</strong>Konsep gerak lurus digunakan dalam perancangan dan analisis pergerakan kendaraan seperti mobil, kereta api, dan pesawat terbang. Dengan memahami kecepatan, percepatan, dan jarak tempuh, insinyur dapat merancang sistem transportasi yang efisien dan aman.
      </li>
      <li>
        <strong> Olahraga</strong>Dalam olahraga seperti lari atau balap sepeda, atlet dan pelatih menggunakan prinsip gerak lurus untuk mengukur dan meningkatkan kinerja. Kecepatan dan waktu tempuh dihitung untuk menentukan strategi terbaik dalam kompetisi.
      </li>
      <li>
        <strong>Astronomi</strong>Gerak lurus juga diterapkan dalam astronomi untuk mempelajari pergerakan benda langit. Misalnya, pergerakan planet mengelilingi matahari dapat dianalisis menggunakan hukum gerak Newton dan hukum gravitasi
      </li>
      <li>
        <strong>Konstruksi</strong>Dalam bidang konstruksi, insinyur menggunakan konsep gerak lurus untuk memastikan bahwa struktur bangunan dapat menahan beban dan tekanan tanpa mengalami deformasi yang berbahaya.
      </li>
    </ul>
    </>
    ),
    },
    {
      title:"Jarak",
      content: (
        <>
      panjang lintasan sesungguhnya yang ditempuh oleh suatu benda dalam waktu tertentu mulai dari posisi awal dan selesai pada posisi akhir. Jarak merupakan besaran skalar karena tidak bergantung pada arah. Oleh karena itu, jarak selalu bernilai positif. Secara matematis, jarak dirumuskan sebagai berikut:
      <strong>formula: "s = s1 + s2 + s3 + s4 +…+sn",</strong>
      <p> Untuk memahami konsep jarak, perhatikan bagan berikut ini</p>
      <img src = {Jarak}/>
      </>
      ),
    },
    {
      title: "Perpindahan",
      content: (
        <>
      "perubahan posisi atau kedudukan suatu benda dari keadaan awal ke keadaan akhirnya. Perpindahan merupakan besaran vektor. Perpindahan hanya mempersoalkan jarak antar kedudukan awal dan akhir suatu objek. Besar perpindahan dapat dihitung dengan menggunakan aturan berikut ini."
      <p>
      <strong>formula:</strong> "∆s=Jarak terdekat dari posisi awal ke posisi akhir",
      </p>
      <p>Untuk lebih memahami konsep perpindahan, perhatikan gambar berikut ini.</p>
      <img src = {Perpindahan}/>
      </>
      ),
    },
    {
      title:"Kelajuan",
      content: (
        <>
      "jarak yang ditempuh tiap satu satuan waktu. Kelajuan merupakan besarnya kecepatan suatu objek. Kelajuan tidak memiliki arah sehingga termasuk besaran skalar. Secara matematis, persamaan kelajuan dituliskan sebagai berikut."
      <p>
      <strong>formula:</strong>"v=s/t"
      </p>
      <p> 
      <strong>Keterangan:</strong>
      <ul>
      <li>v=Kelajuan rata-rata (m/s)</li>
      <li>s=Jarak total yang ditempuh (m)</li>
      <li>t=Waktu tempuh yang diperlukan (s)</li>
      </ul>
      </p>
      </>
      ),
    },
      
  ];
  
  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index} className="card">
          <h2>{item.title}</h2>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
};
export default GerakLurus;