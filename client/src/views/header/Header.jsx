import React from 'react';

import './header.css';

function Header() {
  return (
    <div className="header__wrapper">
      <header className="header">
        <div className="header__left">
          <div className="header__brand__image__wrapper">
            <i className="fas fa-phone-alt header__brand__image"></i>
          </div>

          <div className="header__brand__name">FaceTime</div>
        </div>
        <div className="header__right">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=Tanuj-Choudhary&repo=facetime&type=star&size=large"
            frameBorder="0"
            scrolling="0"
            width="90"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
      </header>
    </div>
  );
}

export default Header;
