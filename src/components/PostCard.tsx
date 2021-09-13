import { Link } from 'react-router-dom';
import { Post } from '../types';

type PostCardPropd = {
  post: Post;
};

const PostCard = ({ post }: PostCardPropd) => {
  return (
    <div>
      <Link to={`/user/${post.authorId}`}>
        <h2>{post.authorName}</h2>
      </Link>
      <h3>{post.authorUsername}</h3>
      <p>{post.body}</p>
      <p>{post.createdAt}</p>
    </div>
  );
};

export default PostCard;
