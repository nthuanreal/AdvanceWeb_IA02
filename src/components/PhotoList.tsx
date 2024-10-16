import React from 'react';

interface Photo {
  id: string;
  author: string;
  thumbnailUrl: string;
}

interface PhotoListProps {
  photos: Photo[];
  onClick: (photoId: string) => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ photos, onClick }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', columnGap: '10%', rowGap: '5px'  }}>
      {photos.map((photo) => (
        <div key={photo.id} onClick={() => onClick(photo.id)} style={{ cursor: 'pointer', textAlign: 'center'}}>
          <img src={photo.thumbnailUrl} alt={photo.author} loading= 'lazy' style={{ width: '100%', borderRadius: '8px' } } />
          <p>{photo.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
