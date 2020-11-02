import React from 'react';

import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__info">
          You need to allow access to video and audio to place calls. <br /> Facetime is fully Open
          Source and does not store any data on its servers.
        </div>
        <div className="footer__credits">Made with ❤️ by Tanuj Choudhary</div>
      </div>
    </div>
  );
}

export default Footer;
