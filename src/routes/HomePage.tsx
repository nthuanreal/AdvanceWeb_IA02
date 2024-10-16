import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PhotoList from '../components/PhotoList';
import { UNSPLASH_ACCESS_KEY } from '../config';

interface Photo {
  id: string;
  urls: { small: string; full: string };
  user: { name: string };
}

//homepage
const HomePage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fetchPhotos = async () => {
    setLoading(true); // 
    try {
      const response = await axios.get(`https://api.unsplash.com/photos`, {
        params: { page, per_page: 10 },
        headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
      });
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  const handleScroll = () => {
    if ( 
        (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 5) 
        && !loading // Không tải thêm nếu đang trong trạng thái loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]); 

  return (
    <div>
      <PhotoList
        photos={photos.map((photo) => ({
          id: photo.id,
          author: photo.user.name,
          thumbnailUrl: photo.urls.small,
        }))}
        onClick={(id) => navigate(`/photos/${id}`)}
      />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
