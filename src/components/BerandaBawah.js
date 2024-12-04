import React from 'react';

const BerandaBawah = ({ image, title, description, intro }) => {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                    <img 
                        src={image} 
                        alt={title} 
                        className="img-fluid rounded-4 shadow-lg mb-4"
                        style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
                    />
                </div>
                <div className="col-md-6">
                    <h6 className="text-primary mb-3">{intro}</h6>
                    <h2 className="text-dark">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BerandaBawah;
