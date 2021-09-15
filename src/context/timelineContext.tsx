import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTimeline } from '../services/getTimeline';
import { Post, ProviderProps } from '../types';
import { UserContext } from './userContext';

type TimelineContextData = {
  timeline: Post[];
  setTimeline: React.Dispatch<React.SetStateAction<Post[]>>;
  currentOffset: number;
  setCurrentOffset: React.Dispatch<React.SetStateAction<number>>;
};

const TimelineContext = createContext<Partial<TimelineContextData>>({});

function TimelineContextProvider({ children }: ProviderProps) {
  const [timeline, setTimeline] = useState<Post[]>([]);
  const [currentOffset, setCurrentOffset] = useState<number>(0);

  const { token } = useContext(UserContext);

  useEffect(() => {
    if (!token) {
      return setTimeline([]);
    }

    getTimeline(token, 0).then(setTimeline);
  }, [token]);

  return (
    <TimelineContext.Provider
      value={{ timeline, setTimeline, currentOffset, setCurrentOffset }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export { TimelineContext, TimelineContextProvider };
