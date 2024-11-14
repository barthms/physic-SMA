import foto2 from '../assets/Newton.jpg'
import contoh from '../assets/contoh.jpg'
import '../App.css'
const Newtonn = () => {
    return (
        <div className="container mt-5">
            <div className="p-4 bg-light rounded shadow-sm">
                <h1 className="text-center mb-4">Hukum Newton</h1>
                <div className="d-flex align-items-start">
                    <img
                        src={foto2}
                        alt="Ilustrasi Hukum Newton"
                        className="me-5 img-fluid"
                        style={{ width: '400px', height: 'auto' }}
                    />
                    <p className="text-justify">


                        Hukum Newton adalah prinsip dasar dalam fisika yang menjelaskan hubungan antara gaya dan gerak suatu benda.
                        Dirumuskan oleh Sir Isaac Newton, hukum ini membentuk fondasi dari mekanika klasik, cabang fisika yang mempelajari dinamika benda-benda fisik di bawah pengaruh gaya.
                        Hukum Newton mencakup pemahaman tentang bagaimana benda mempertahankan keadaan geraknya atau mengalami perubahan kecepatan dan arah ketika dipengaruhi oleh gaya tertentu.
                        Prinsip ini memungkinkan kita untuk meramalkan dan menghitung gerak benda, dari yang sangat kecil hingga yang sangat besar, dalam berbagai konteks, seperti pada kendaraan, sistem planet, mesin, dan berbagai teknologi lain.
                        Hukum Newton menguraikan bagaimana semua objek berinteraksi dalam bentuk aksi dan reaksi,
                        memberikan wawasan penting tentang kestabilan, kecepatan, dan percepatan suatu benda ketika gaya diterapkan.
                        Hukum newton memiliki 3 prinsip dasar yang mendasari fisika. Tiga hukum ini dikemukakan oleh Sir Isacc Newton dalam karya nya yang terkenal Philosophiæ Naturalis Principia Mathematica, yang diterbitkan pada tahun 1687.
                    </p>

              </div>
                <h2 
                    className="text-center mt-5"
                    style={{ color: '#3498db', fontWeight: 'bold' }}  
                >
                    Contoh Penerapan Hukum Newton
                </h2>
                
                <div style={{fontSize: "19px"}}>
                  
                    <li><strong>Pada peristiwa peluncuran roket</strong> gas panas yang dipancarkan dari pembakaran dan pancaran ini menyebabkan timbulnya gaya reaksi pada roket yaitu gaya yang mengangkat serta mempercepat roket meluncur. Kejadian ini merupakan gambaran hukum ketiga Newton. </li>
                    <li><strong>Ketika seorang anak sedang menarik seutas tali yang diikatkan pada sebatang pohon besar.</strong> Pada kejadian ini, ada dua gaya yang berlawanan, yaitu gaya tarik oleh anak terhadap pohon yang disebut gaya aksi, sedangkan pohon mempertahankan anak dengan gaya yang sama disebut gaya reaksi. 
                        Semakin besar gaya aksi yang dikenakan terhadap pohon, semakin besar gaya reaksi yang diberikan pohon.</li>
                    <li><strong>Taplak di atas meja</strong> kemudian diatasnya terdapat vas bunga atau piring. Taplak ditarik secara cepat maka vas bunga atau piring tetap dalam keadaan diam.</li>
                </div>
                    
                         <div className="text-center mt-5">
                         <img 
                             src={contoh} 
                             alt="Contoh Gaya Tarik dan Dorong"
                             className="img-fluid" 
                             style={{maxWidth: '600px', width: '400%', height: 'auto' }} 
                             
                             />
                             
            </div>
        </div>
               </div>     
    );
};

export default Newtonn;
