import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

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
      <div>
        <Link to="/home">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Profile</Link>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  function publicLinks() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Devs Social</h2>
      {isLogged ? loggedUserLinks() : publicLinks()}
    </div>
  );
};

export default Navbar;
