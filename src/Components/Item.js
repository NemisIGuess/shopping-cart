import '../Style/Item.css';
import { useState } from 'react';

function Item(props) {
  const { game, ages, images, players, price, time } = props.game;

  const [imageIndex, setImageIndex] = useState(0);

  const slideRight = () => {
    setImageIndex((imageIndex + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = imageIndex - 1;
    if (nextIndex < 0) {
      setImageIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setImageIndex(nextIndex);
    }
  };

  return (
    <div className="item">
      <svg
        onClick={props.close}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="closeBtn"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="imageSlider">
        <svg
          onClick={slideLeft}
          className="arrow leftArrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <img className="image" alt={game} src={images[imageIndex]}></img>
        <svg
          onClick={slideRight}
          className="arrow rightArrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
      <div className="gameInfo">
        <h3 className="gameName">{game}</h3>
        <p>Duracion: {time}</p>
        <p>Edades: {ages}</p>
        <p>Jugadores: {players}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Item;
