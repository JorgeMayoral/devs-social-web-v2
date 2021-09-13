import React, { createContext, useEffect, useState } from 'react';
import { getAllPosts } from '../services/getAllPosts';
import { Post, ProviderProps } from '../types';
import { LIMIT } from '../utils/constants';

type ExploreContextData = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  currentOffset: number;
  setCurrentOffset: React.Dispatch<React.SetStateAction<number>>;
};

const ExploreContext = createContext<Partial<ExploreContextData>>({});

function ExploreContextProvider({ children }: ProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentOffset, setCurrentOffset] = useState<number>(0);

  useEffect(() => {
    getAllPosts(0).then(setPosts);
    setCurrentOffset(LIMIT);
  }, []);

  return (
    <ExploreContext.Provider
      value={{ posts, setPosts, currentOffset, setCurrentOffset }}
    >
      {children}
    </ExploreContext.Provider>
  );
}

export { ExploreContext, ExploreContextProvider };
