import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotoDetails = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/photos`)
      .then((response) => response.json())
      .then((data) => {
        const selectedPhoto = data.photos.find(photo => photo.id.toString() === id);
        if (selectedPhoto) {
          setPhoto(selectedPhoto);
        } else {
          setError('Photo not found');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="photo-details">
      <img src={photo.url} alt={photo.title} />
      <h1>{photo.title}</h1>
      <p>{photo.description}</p>
    </div>
  );
};

export default PhotoDetails;
