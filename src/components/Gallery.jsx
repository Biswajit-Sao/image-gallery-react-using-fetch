import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/photos')
      .then((response) => response.json())
      .then((data) => {
        const limitedPhotos = data.photos;
        setPhotos(limitedPhotos);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="thumbnail">
          <Link to={`/photo/${photo.id}`}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
