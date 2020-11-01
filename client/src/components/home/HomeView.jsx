import React from 'react';

import Header from '../../views/header';
import Hero from '../../views/hero';
import CallBox from '../callBox';
import './homeView.css';

function HomeView({ handleClick, buttonClicked }) {
  const renderButtons = () => {
    return (
      <div className="home__btns">
        <button id="start" onClick={handleClick} className="btn home__create-btn">
          <i className="fa fa-video-camera video__icon" aria-hidden="true"></i>Start a call
        </button>
        <button id="join" onClick={handleClick} className="btn home__join-btn">
          <i className="fas fa-user-friends friends__icon"></i>Join a call
        </button>
      </div>
    );
  };

  const renderHelper = () => {
    if (!buttonClicked) {
      return renderButtons();
    } else if (buttonClicked === 'join') {
      return <CallBox />;
    }
    return null;
  };

  return (
    <div>
      <Header />
      <Hero />
      {renderHelper()}
    </div>
  );
}

export default HomeView;
