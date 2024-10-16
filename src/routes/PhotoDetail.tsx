// src/pages/PhotoPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PhotoDetails from '../components/PhotoDetails';
import { UNSPLASH_ACCESS_KEY } from '../config';

const PhotoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
          headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
        });
        setPhoto(response.data);
      } catch (error) {
        console.error('Error fetching photo details:', error);
      }
      setLoading(false);
    };

    fetchPhotoDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!photo) return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ color: 'red' }}>Image Not Found!</h1>
        <p>The image you are looking for does not exist.</p>
     </div>
  );

  return (
    <PhotoDetails
      photo={{
        fullUrl: photo.urls.full,
        title: photo.description || 'No Title',
        author: photo.user.name,
        description: photo.alt_description || 'No Description Available',
      }}
    />
  );
};

export default PhotoDetail;
