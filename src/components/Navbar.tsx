import { Create, Explore, Home, Logout, Person } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  Portal,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import AddPostModal from './AddPostModal';
import TooltipIconButton from './TooltipIconButton';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { isLogged, logout } = useUser();
  const history = useHistory();

  const container = useRef(null);

  useEffect(() => {
    if (!isLogged) {
      history.replace('/');
    }
  }, [history, isLogged]);

  function loggedUserLinks() {
    return (
      <>
        <Stack direction="row" spacing={1}>
          <Tooltip title="Create post">
            <IconButton onClick={() => setModalOpen(true)}>
              <Create sx={{ color: 'white' }} fontSize="small" />
            </IconButton>
          </Tooltip>
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

        <Portal container={container.current}>
          <AddPostModal
            modalOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        </Portal>
      </>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={appbarStyle}>
        <Stack direction="row">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DevsSocial
          </Typography>
          {isLogged ? loggedUserLinks() : null}
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
