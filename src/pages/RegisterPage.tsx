import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLogged, isLoginLoading, register } = useUser();

  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      history.replace('/home');
    }
  }, [isLogged, history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register({ username, name, email, password });
  };

  return (
    <>
      <form>
        <label htmlFor="usernameInput">Username</label>
        <input
          type="text"
          name="usernameInput"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          name="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="emailInput">Email</label>
        <input
          type="email"
          name="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="passwordInput">Password</label>
        <input
          type="password"
          name="passwordInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit} disabled={isLoginLoading}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>.
      </p>
      {isLoginLoading && <p>Loading...</p>}
    </>
  );
};

export default RegisterPage;
