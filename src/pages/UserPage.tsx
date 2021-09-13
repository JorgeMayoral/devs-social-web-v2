import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostList from '../components/PostList';
import { getUser } from '../services/getUser';
import { getUserPosts } from '../services/getUserPosts';
import { Post, RouteParams, User } from '../types';
import { LIMIT } from '../utils/constants';

const UserPage = () => {
  const [user, setUser] = useState<Partial<User>>({});
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [offset, setOffset] = useState(10);
  const [state, setState] = useState({ loading: false, allLoaded: false });

  const { id } = useParams<RouteParams>();

  function handleLoadMore() {
    setState({ loading: true, allLoaded: false });
    setOffset((prev) => prev + LIMIT);

    getUserPosts(id, offset)
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
    setState({ loading: true, allLoaded: false });

    getUserPosts(id, 0).then((data) => {
      setUserPosts(data);
    });

    getUser(id).then((data) => {
      setUser(data);
    });

    setState({ loading: false, allLoaded: false });
  }, [user, id]);

  if (state.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <h1>{user?.name}</h1>
      <h2>{user?.username}</h2>
      <PostList posts={userPosts} loadMore={handleLoadMore} />
    </Container>
  );
};

export default UserPage;
