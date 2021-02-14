import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Style/Modal.css';
import Item from './Item';

const Modal = (props) => {
  const history = useHistory();

  const closeModal = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const gameName = props.location.pathname.split('/')[2];

  console.log(gameName);

  return (
    <div>
      <div className="modalWrapper" onClick={closeModal}>
        <Item name={gameName} />
      </div>
    </div>
  );
};

export default Modal;
