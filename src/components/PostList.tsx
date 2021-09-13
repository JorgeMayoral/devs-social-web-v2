import { Button, Stack } from '@mui/material';
import { EventHandler } from 'react';
import { Post } from '../types';
import PostCard from './PostCard';

type PostListProps = {
  posts: Post[];
  loadMore: EventHandler<any>;
  isAllLoaded?: boolean;
};

const PostList = ({ posts, loadMore, isAllLoaded }: PostListProps) => {
  return (
    <Stack spacing={2} paddingTop={2}>
      {posts?.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      <Button variant="outlined" onClick={loadMore} disabled={isAllLoaded}>
        Load more
      </Button>
    </Stack>
  );
};

export default PostList;
