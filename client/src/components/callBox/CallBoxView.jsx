import React from 'react';
import Modal from '../../views/modal/Modal';

import './callBox.css';

function CallBoxView({ fields, handleChange, handleClick, isModalOpen, handleModalClose }) {
  return (
    <div className="callBox">
      {isModalOpen && (
        <Modal handleModalAction={handleModalClose}>
          <h1 className="callbox__modal">Please enter a ID</h1>
        </Modal>
      )}
      <input
        name="friendID"
        value={fields.friendID}
        onChange={handleChange}
        placeholder="Friend ID"
        type="text"
        className="input__id"
      />
      <button onClick={handleClick} className="call-btn">
        Call
      </button>
    </div>
  );
}

export default CallBoxView;
