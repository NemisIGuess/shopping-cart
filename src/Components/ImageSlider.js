import React, { useState, useEffect } from 'react';
import { getter } from './Database';
import _ from 'lodash';
import '../Style/ImageSlider.css';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = getter().map((image) => image.banner);
    setImages(_.sampleSize(images, 3));
  }, []);

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <div className="imageSlider">
        <button onClick={slideLeft}>{'<'}</button>
        <img className="image" src={images[index]} alt={index} />
        <button onClick={slideRight}>{'>'}</button>
      </div>
    )
  );
};

export default ImageSlider;
