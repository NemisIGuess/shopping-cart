import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../Style/Modal.css';
import Item from './Item';
import { DatabaseContext } from './Database';

const Modal = (props) => {
  const history = useHistory();
  const database = useContext(DatabaseContext);

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
