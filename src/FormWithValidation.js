import React, { useState } from 'react';

function FormWithValidation() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || password.length < 6) {
      setError('Username cannot be empty and password must be at least 6 characters.');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Form with Validation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter username"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

     {submitted && <p>Form submitted successfully!</p>}
      {submitted && !error && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
}

export default FormWithValidation;
