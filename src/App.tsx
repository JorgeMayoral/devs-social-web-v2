import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ExploreContextProvider } from './context/exploreContext';
import { TimelineContextProvider } from './context/timelineContext';
import { UserContextProvider } from './context/userContext';
import { useUser } from './hooks/useUser';
import ExplorePage from './pages/ExplorePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  const { isLogged } = useUser();

  return (
    <UserContextProvider>
      <TimelineContextProvider>
        <ExploreContextProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                {isLogged ? <Redirect to="/home" /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/home">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/explore">
                <ExplorePage />
              </Route>
            </Switch>
          </Router>
        </ExploreContextProvider>
      </TimelineContextProvider>
    </UserContextProvider>
  );
}

export default App;
