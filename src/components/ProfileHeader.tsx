import { Avatar, Container, Stack, Typography } from '@mui/material';

type ProfileHeaderProps = {
  user: any;
};

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <Container>
      <Stack direction="row" spacing={2} paddingTop={3}>
        <Avatar
          alt={user.name}
          src={`http://avatars.dicebear.com/api/bottts/${user.username}.svg`}
          sx={{ width: 100, height: 100 }}
        />
        <Stack spacing={2}>
          <Typography variant="h3">{user.name}</Typography>
          <Typography
            variant="h4"
            color="text.secondary"
          >{`@${user.username}`}</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2} paddingY={3}>
        <Typography variant="h6">Posts: {user?.posts?.length}</Typography>
        <Typography variant="h6">Likes: {user?.likedPosts?.length}</Typography>
        <Typography variant="h6">
          Following: {user?.following?.length}
        </Typography>
        <Typography variant="h6">
          Followers: {user?.followers?.length}
        </Typography>
      </Stack>
    </Container>
  );
};

export default ProfileHeader;
