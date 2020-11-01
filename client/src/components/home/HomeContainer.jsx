import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import HomeView from './HomeView';

function HomeContainer() {
  const [buttonClicked, setbuttonClicked] = useState(null);
  const roomID = uuidv4();
  const history = useHistory();

  const handleClick = (e) => {
    const id = e.target.closest('.btn').id;

    // Start button clicked
    if (id === 'start') {
      history.push(`rooms/${roomID}`);
    }

    // Join button clicked
    setbuttonClicked(id);
  };

  return <HomeView handleClick={handleClick} buttonClicked={buttonClicked} />;
}

export default HomeContainer;
