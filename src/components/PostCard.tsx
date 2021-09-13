import { Post } from '../types';

type PostCardPropd = {
  post: Post;
};

const PostCard = ({ post }: PostCardPropd) => {
  return (
    <div>
      <h2>{post.authorName}</h2>
      <h3>{post.authorUsername}</h3>
      <p>{post.body}</p>
      <p>{post.createdAt}</p>
    </div>
  );
};

export default PostCard;
