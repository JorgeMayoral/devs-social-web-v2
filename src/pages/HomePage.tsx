import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import './HomePage.css';

const HomePage = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="App">
      <header className="App-header">
        <p>Devs Social Web</p>
        <h1>{userContext?.user?.name}</h1>
      </header>
    </div>
  );
};

export default HomePage;
