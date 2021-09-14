import { Add, Remove } from '@mui/icons-material';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostList from '../components/PostList';
import ProfileHeader from '../components/ProfileHeader';
import { UserContext } from '../context/userContext';
import { useUser } from '../hooks/useUser';
import { getUser } from '../services/getUser';
import { getUserPosts } from '../services/getUserPosts';
import { Post, RouteParams, User } from '../types';
import { LIMIT } from '../utils/constants';

const UserPage = () => {
  const [user, setUser] = useState<Partial<User>>({});
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [offset, setOffset] = useState(10);
  const [state, setState] = useState({ loading: false, allLoaded: false });
  const [isFollowing, setIsFollowing] = useState(false);

  const { user: loggedUser } = useContext(UserContext);
  const { follow } = useUser();

  const { id } = useParams<RouteParams>();

  function handleLoadMore() {
    setState({ loading: true, allLoaded: false });
    setOffset((prev) => prev + LIMIT);

    getUserPosts(id, offset)
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

  function handleFollow() {
    follow({ id });
    setIsFollowing((prev) => !prev);
  }

  useEffect(() => {
    setState({ loading: true, allLoaded: false });

    getUserPosts(id, 0).then((data) => {
      setUserPosts(data);
    });

    getUser(id).then((data) => {
      setUser(data);
    });

    setIsFollowing(loggedUser!.following.includes(id));

    setState({ loading: false, allLoaded: false });
  }, [id, loggedUser]);

  if (state.loading) {
    return <Typography variant="h3">Loading...</Typography>;
  }

  return (
    <Container>
      <ProfileHeader user={user} />

      {!isFollowing ? (
        <IconButton onClick={handleFollow}>
          <Stack direction="row" alignItems="center">
            <Add />
            <Typography variant="h6">Follow</Typography>
          </Stack>
        </IconButton>
      ) : (
        <IconButton onClick={handleFollow}>
          <Stack direction="row" alignItems="center">
            <Remove />
            <Typography variant="h6">Unfollow</Typography>
          </Stack>
        </IconButton>
      )}
      <PostList posts={userPosts} loadMore={handleLoadMore} />
    </Container>
  );
};

export default UserPage;
