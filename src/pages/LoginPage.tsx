import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useUser } from '../hooks/useUser';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isLogged, isLoginLoading, login } = useUser();

  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      history.replace('/home');
    }
  }, [isLogged, history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password });
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
        <label htmlFor="passwordInput">Password</label>
        <input
          type="password"
          name="passwordInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit} disabled={isLoginLoading}>
          Login
        </button>
      </form>
      {isLoginLoading && <p>Loading...</p>}
    </>
  );
};

export default LoginPage;
