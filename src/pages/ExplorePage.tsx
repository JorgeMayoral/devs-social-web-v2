import { Container } from '@mui/material';
import { useContext } from 'react';
import PostList from '../components/PostList';
import { ExploreContext } from '../context/exploreContext';
import { useExplore } from '../hooks/useExplore';

const ExplorePage = () => {
  const { posts } = useContext(ExploreContext);
  const { loadMore } = useExplore();

  return (
    <Container>
      <PostList posts={posts!} loadMore={loadMore} />
    </Container>
  );
};

export default ExplorePage;
