import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CallBoxView from './CallBoxView';

function CallBoxContainer() {
  const [fields, setfields] = useState({ friendID: '' });
  const [isModalOpen, setisModalOpen] = useState(false);

  const history = useHistory();

  // Handling call button
  const handleClick = (e) => {
    e.preventDefault();
    const { friendID } = fields;

    // Empty id show modal
    if (friendID === '') {
      setisModalOpen(true);
      return;
    }

    // Valid ID Go to rooms/:id
    history.push({ pathname: '/rooms', search: `?id=${friendID}` });
  };

  // Controlling input
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFields = { ...fields, [name]: value };

    setfields(newFields);
  };

  const handleModalClose = () => {
    setisModalOpen(false);
  };

  return (
    <CallBoxView
      fields={fields}
      handleChange={handleChange}
      handleClick={handleClick}
      isModalOpen={isModalOpen}
      handleModalClose={handleModalClose}
    />
  );
}

export default CallBoxContainer;
