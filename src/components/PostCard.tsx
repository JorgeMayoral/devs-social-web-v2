import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import { formatDistance } from 'date-fns';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { useUser } from '../hooks/useUser';
import { Post } from '../types';

type PostCardProp = {
  post: Post;
};

const PostCard = ({ post }: PostCardProp) => {
  const { user } = useContext(UserContext);
  const { likePost } = useUser();

  function handleLikePost() {
    likePost({ id: post.id });
  }

  return (
    <Card elevation={2}>
      <Link
        to={`/user/${post.authorId}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardHeader
          avatar={
            <Avatar
              alt={post.authorName}
              src={`http://avatars.dicebear.com/api/bottts/${post.authorUsername}.svg`}
            />
          }
          title={post.authorName}
          subheader={`@${post.authorUsername}`}
        />
      </Link>
      <CardContent>
        <Typography variant="body1">{post.body}</Typography>
        <Typography variant="body2" color="text.secondary">
          {formatDistance(new Date(post.createdAt), new Date(), {
            addSuffix: true,
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleLikePost}>
          {user?.likedPosts.includes(post.id) ? (
            <Favorite />
          ) : (
            <FavoriteBorder />
          )}
          <Typography variant="h6">{post.totalLikes}</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
