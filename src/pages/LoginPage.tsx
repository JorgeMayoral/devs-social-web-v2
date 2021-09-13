import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
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
    <Container>
      <Stack spacing={2} paddingY={3}>
        <Typography variant="h2">Welcome Back!</Typography>
        <TextField
          type="text"
          name="usernameInput"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          name="passwordInput"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Stack>
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={isLoginLoading}
      >
        Login
      </Button>
      <Typography variant="body1" paddingY={3}>
        Don't have an account? <Link to="/register">Register</Link>.
      </Typography>
      {isLoginLoading && <p>Loading...</p>}
    </Container>
  );
};

export default LoginPage;
