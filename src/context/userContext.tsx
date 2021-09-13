import React, { createContext, useEffect, useState } from 'react';
import { getProfile } from '../services/getProfile';
import { LoggedUser } from '../types';

type ProviderProps = {
  children: JSX.Element;
};

type UserContextData = {
  user: LoggedUser | null;
  setUser: React.Dispatch<React.SetStateAction<LoggedUser | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const UserContext = createContext<Partial<UserContextData>>({});

function UserContextProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<LoggedUser | null>(null);
  const [token, setToken] = useState<string | null>(() =>
    sessionStorage.getItem('devs-social-jwt'),
  );

  useEffect(() => {
    if (!token) {
      return setUser(null);
    }
    getProfile(token).then(setUser);
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
