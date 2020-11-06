import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import HomeView from './HomeView';

function HomeContainer() {
  const [buttonClicked, setbuttonClicked] = useState(null);

  const history = useHistory();

  const handleClick = (e) => {
    const id = e.target.closest('.btn').id;

    // Start button clicked
    if (id === 'start') {
      history.push(`rooms`);
    }

    // Join button clicked
    setbuttonClicked(id);
  };

  return <HomeView handleClick={handleClick} buttonClicked={buttonClicked} />;
}

export default HomeContainer;
