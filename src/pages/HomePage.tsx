import { useContext } from 'react';
import { UserContext } from '../context/userContext';

const HomePage = () => {
  const userContext = useContext(UserContext);

  return (
    <div>
      <header>
        <p>Devs Social Web</p>
        <h1>{userContext?.user?.name}</h1>
      </header>
    </div>
  );
};

export default HomePage;
