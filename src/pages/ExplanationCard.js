import React from 'react';

const ExplanationCard = ({ title, content }) => {
  return (
    <div
      style={{
        border: '1px solid #dee2e6',
        borderRadius: '10px',
        padding: '20px',
        width: '300px',
        textAlign: 'left',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
      }}
    >
      <h3 style={{ color: '#343a40', fontSize: '1.3rem' }}>{title}</h3>
      <p style={{ color: '#495057', fontSize: '1rem', lineHeight: '1.6' }}>{content}</p>
    </div>
  );
};

export default ExplanationCard;
