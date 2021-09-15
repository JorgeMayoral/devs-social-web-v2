import { Button, Container } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import ProfileHeader from '../components/ProfileHeader';
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
    <Container>
      <ProfileHeader user={user!} />
      {userPosts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      {!state.allLoaded && user?.posts.length! > 0 && (
        <Button onClick={handleLoadMore} disabled={state.loading}>
          Load more
        </Button>
      )}
    </Container>
  );
};

export default ProfilePage;
