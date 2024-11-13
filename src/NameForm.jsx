
import React, { useState } from 'react';

function NameForm() {
  // Declare a new state variable called "name"
  const [name, setName] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setName(event.target.value); // Update the name state with input value
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert(`Hello, ${name}!`); // Display the name in an alert
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
