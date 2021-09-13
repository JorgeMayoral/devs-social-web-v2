import { useContext, useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { UserContext } from '../context/userContext';
import { getUserPosts } from '../services/getUserPosts';
import { Post } from '../types';
import { LIMIT } from '../utils/constants';

const ProfilePage = () => {
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [offset, setOffset] = useState(10);
  const [state, setState] = useState({ loading: false, allLoaded: false });

  const { user } = useContext(UserContext);

  function handleLoadMore() {
    setState({ loading: true, allLoaded: false });
    setOffset((prev) => prev + LIMIT);

    getUserPosts(user!._id, offset)
      .then((data) => {
        console.log(data);
        setUserPosts((prev) => prev.concat(data));

        if (data.length > 0) {
          setState({ loading: false, allLoaded: false });
        } else {
          setState({ loading: false, allLoaded: true });
        }
      })
      .catch((err) => {
        setState({ loading: false, allLoaded: false });
        console.error(err);
      });
  }

  useEffect(() => {
    if (user) {
      getUserPosts(user!._id, 0).then((data) => {
        setUserPosts(data);
      });
    }
  }, [user]);

  return (
    <div>
      <h1>{user?.name}</h1>
      <h2>{user?.username}</h2>
      {userPosts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      {!state.allLoaded && user?.posts.length! > 0 && (
        <button type="button" onClick={handleLoadMore} disabled={state.loading}>
          Load more
        </button>
      )}
    </div>
  );
};

export default ProfilePage;
