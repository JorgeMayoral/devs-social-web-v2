import { useContext } from 'react';
import PostCard from '../components/PostCard';
import { ExploreContext } from '../context/exploreContext';
import { useExplore } from '../hooks/useExplore';

const ExplorePage = () => {
  const { posts } = useContext(ExploreContext);
  const { loadMore } = useExplore();

  return (
    <div>
      {posts?.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      <button type="button" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

export default ExplorePage;
