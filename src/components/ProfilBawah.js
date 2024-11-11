import React from 'react';

const ProfilBawah = ({ image, title, description }) => {
    return (
        <div className="container mt-5 d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
                <img 
                    src={image} 
                    alt={title} 
                    className="img-fluid rounded-4 shadow-lg mb-4"
                    style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
                />
            </div>
            <div className="col-lg-5">
                <h6 className="text-primary mb-3">Tentang Sekolah</h6>
                <h2 className="text-dark">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProfilBawah;
