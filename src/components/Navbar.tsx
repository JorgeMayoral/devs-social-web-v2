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
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Devs Social</h2>
      {isLogged ? loggedUserLinks() : <Link to="/login">Login</Link>}
    </div>
  );
};

export default Navbar;
