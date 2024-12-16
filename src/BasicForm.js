import React, { useState } from 'react';

function BasicForm() {
  
  const [name, setName] = useState('');
  
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name); 
    setName(''); 
  };

  return (
    <div>
      <h2>Basic Form with Controlled Components</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedName && (
        <div>
          <h3>Submitted Name: {submittedName}</h3>
        </div>
      )}
    </div>
  );
}

export default BasicForm;
