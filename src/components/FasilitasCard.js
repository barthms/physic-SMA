import React from 'react';

const FasilitasCard = ({ image, title, description }) => {
    return (
        <div className="card shadow-sm rounded-4 h-100">
            <img 
                src={image} 
                alt={title} 
                className="card-img-top img-fluid" 
                style={{ maxHeight: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
                <h5 className="card-title text-primary">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default FasilitasCard;
