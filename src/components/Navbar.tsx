import { Explore, Home, Login, Logout, Person } from '@mui/icons-material';
import { AppBar, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import TooltipIconButton from './TooltipIconButton';

const Navbar = () => {
  const { isLogged, logout } = useUser();
  const history = useHistory();

  useEffect(() => {
    if (!isLogged) {
      history.replace('/');
    }
  }, [history, isLogged]);

  function loggedUserLinks() {
    return (
      <Stack direction="row" spacing={1}>
        <Link to="/home">
          <TooltipIconButton title="Home">
            <Home sx={{ color: 'white' }} fontSize="small" />
          </TooltipIconButton>
        </Link>
        <Link to="/explore">
          <TooltipIconButton title="Explore">
            <Explore sx={{ color: 'white' }} fontSize="small" />
          </TooltipIconButton>
        </Link>
        <Link to="/profile">
          <TooltipIconButton title="Profile">
            <Person sx={{ color: 'white' }} fontSize="small" />
          </TooltipIconButton>
        </Link>
        <Tooltip title="Logout">
          <IconButton onClick={logout}>
            <Logout sx={{ color: 'white' }} fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>
    );
  }

  function publicLinks() {
    return (
      <Stack direction="row" spacing={1}>
        <Link to="/login">
          <TooltipIconButton title="Login">
            <Login sx={{ color: 'white' }} fontSize="small" />
          </TooltipIconButton>
        </Link>
      </Stack>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={appbarStyle}>
        <Stack direction="row">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DevsSocial
          </Typography>
          {isLogged ? loggedUserLinks() : publicLinks()}
        </Stack>
      </AppBar>
    </Box>
  );
};

const appbarStyle = {
  paddingLeft: 4,
  paddingRight: 4,
  paddingTop: 1,
  paddingBottom: 1,
};

export default Navbar;
