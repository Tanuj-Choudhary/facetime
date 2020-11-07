import React from 'react';
import Modal from '../../views/modal/Modal';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './liveChat.css';

function LiveChatView({
  userVideo,
  partnerVideo,
  modalMessage,
  modalVisible,
  handleModalAction,
  receivingCall,
  acceptCall,
  rejectCall,
  callAccepted,
  callRejected,
  caller,
  yourID,
  error,
}) {
  const renderErrorModal = () => {
    if (modalVisible) {
      return (
        <Modal handleModalAction={handleModalAction}>
          <h1 className="callbox__modal">{modalMessage}</h1>
        </Modal>
      );
    }
    return null;
  };

  const renderCallModal = () => {
    if (receivingCall && !callAccepted && !callRejected) {
      return (
        <Modal handleModalAction={rejectCall}>
          <h1 className="call__modal__heading">{caller} is calling you</h1>
          <div className="call__modal__btns">
            <button onClick={acceptCall} className="accept-btn">
              <i className="fa fa-check call__modal__btns__icon"></i>
              Accept call
            </button>
            <button onClick={rejectCall} className="reject-btn">
              <i className="fa fa-close call__modal__btns__icon"></i>
              Reject call
            </button>
          </div>
        </Modal>
      );
    }
    return null;
  };

  const renderVideos = () => {
    if (userVideo !== null || partnerVideo !== null) {
      return (
        <div className="videoboxes">
          <div className="videobox videobox__partner">
            <video
              ref={(ref) => {
                if (ref) {
                  ref.srcObject = partnerVideo;
                }
              }}
              autoPlay={true}
              controls
              className="video__partner"
              width="350"
              height="300"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>

          <div className="videobox videobox__user">
            <video
              ref={(ref) => {
                if (ref) {
                  ref.srcObject = userVideo;
                }
              }}
              autoPlay={true}
              controls
              width="100"
              height="100"
              muted
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      );
    } else if (!error) {
      return (
        <div className="center">
          <Loader
            type="Oval"
            color="#02caca"
            height={100}
            width={100}
            timeout={60000} //60 secs
          />
          <span className="loading__text">
            Waiting for <br /> someone to join
          </span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="chat__page">
      <div className="my__id">
        Your username: <span>{yourID}</span>
      </div>
      {renderErrorModal()}
      {renderCallModal()}
      {renderVideos()}
    </div>
  );
}

export default LiveChatView;
