import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Style/Modal.css';
import Item from './Item';
import { getDB } from './Database';

const Modal = (props) => {
  const history = useHistory();
  const database = getDB();

  const closeModal = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const gameName = props.location.pathname.split('/')[2];

  let gameClicked = {};
  database.map((game) => {
    if (game.game === gameName) {
      return (gameClicked = game);
    }
    return null;
  });

  return (
    <div className="modalWrapper">
      <Item game={gameClicked} close={closeModal} />
    </div>
  );
};

export default Modal;
