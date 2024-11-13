import React, { useState } from 'react';

function StateMgm() {
  // Initialize "name" state with an empty string
  const [name, setName] = useState('');

  // Function to update name state as user types
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Hello, {name || "Hero"}!</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleInputChange} 
      />
    </div>
  );
}

export default StateMgm;