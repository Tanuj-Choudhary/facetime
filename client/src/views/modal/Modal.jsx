import React from 'react';
import { createPortal } from 'react-dom';

import './modal.css';

const Modal = ({ handleModalAction, ...props }) => {
  const handleModalOutsideClick = (e) => {
    // Clicked on modal
    if (e.target.closest('.modal__body')) {
      return;
    }

    // Clicked outside modal
    handleModalAction();
  };

  return createPortal(
    <div onClick={handleModalOutsideClick} className="modal">
      <div className="overlay"></div>
      <div className="modal__body">
        {props.children}
        <span className="close-modal" onClick={handleModalAction}>
          X
        </span>
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default Modal;
