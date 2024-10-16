import React from 'react';

interface PhotoDetailsProps {
  photo: {
    fullUrl: string;
    title: string;
    author: string;
    description: string;
  };
}

const PhotoDetails: React.FC<PhotoDetailsProps> = ({ photo }) => {
  return (
    <div style={{
      width: '80%',
      height: '100vh', 
      margin: '0 auto', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

      borderRadius: '8px' 
    }}>
      <div style={{ backgroundColor: '#e8f29b' }}>
        <h1 style={{ margin: '10px' }}>{photo.title || 'No Title'}</h1>
        <p style={{ margin: '10px', color: '#52a5f2' }}>By {photo.author}</p>
        <p style={{ margin: '0', marginLeft: '10px'}}>{photo.description || 'No Description Available'}</p>
      </div>
      <img src={photo.fullUrl} alt={photo.title} style={{ width: '100%', borderRadius: '8px' }} />
    </div>

  );
};

export default PhotoDetails;
