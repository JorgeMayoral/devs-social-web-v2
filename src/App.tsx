import { CssBaseline } from '@mui/material';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { ExploreContextProvider } from './context/exploreContext';
import { TimelineContextProvider } from './context/timelineContext';
import { UserContextProvider } from './context/userContext';
import { useUser } from './hooks/useUser';
import ExplorePage from './pages/ExplorePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';

function App() {
  const { isLogged } = useUser();

  return (
    <CssBaseline>
      <UserContextProvider>
        <TimelineContextProvider>
          <ExploreContextProvider>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  {isLogged ? (
                    <Redirect to="/home" />
                  ) : (
                    <Redirect to="/login" />
                  )}
                </Route>
                <Route exact path="/home">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/register">
                  <RegisterPage />
                </Route>
                <Route exact path="/explore">
                  <ExplorePage />
                </Route>
                <Route exact path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/user/:id" children={<UserPage />} />
              </Switch>
            </Router>
          </ExploreContextProvider>
        </TimelineContextProvider>
      </UserContextProvider>
    </CssBaseline>
  );
}

export default App;
