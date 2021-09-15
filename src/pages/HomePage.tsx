import { Container } from '@mui/material';
import { useContext } from 'react';
import PostList from '../components/PostList';
import { TimelineContext } from '../context/timelineContext';
import { useTimeline } from '../hooks/useTimeline';

const HomePage = () => {
  const { timeline } = useContext(TimelineContext);
  const { loadMore, isAllLoaded } = useTimeline();

  return (
    <Container>
      <PostList
        posts={timeline!}
        loadMore={loadMore}
        isAllLoaded={isAllLoaded}
      />
    </Container>
  );
};

export default HomePage;
