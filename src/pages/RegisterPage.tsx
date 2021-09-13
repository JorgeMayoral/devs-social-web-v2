import { Button, Container, Stack, TextField, Typography } from '@mui/material';
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
    <Container>
      <Stack spacing={2} paddingY={3}>
        <Typography variant="h2">Create an account</Typography>
        <TextField
          type="text"
          name="usernameInput"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="text"
          name="nameInput"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="email"
          name="emailInput"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        Register
      </Button>
      <Typography variant="body1" paddingY={3}>
        Already have an account? <Link to="/login">Login</Link>.
      </Typography>
      {isLoginLoading && <p>Loading...</p>}
    </Container>
  );
};

export default RegisterPage;
