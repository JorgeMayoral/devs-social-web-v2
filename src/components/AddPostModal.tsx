import {
  Button,
  Container,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { SxProps } from '@mui/system';
import { MouseEventHandler, useState } from 'react';
import { UserContext } from '../context/userContext';
import { createPost } from '../services/createPost';
import { useContext } from 'react';

type AddPostModalProps = {
  modalOpen: boolean;
  onClose: MouseEventHandler;
};

const modalStyle: SxProps = {
  position: 'absolute' as 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
};

const containerStyle: SxProps = {
  width: 600,
  maxWidth: '90%',
  bgcolor: 'white',
  border: '2px solid #dfdfdf',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const AddPostModal = ({ modalOpen, onClose }: AddPostModalProps) => {
  const [content, setContent] = useState('');

  const { token } = useContext(UserContext);

  function handlePublish() {
    createPost(token!, content);
  }

  return (
    <Modal open={modalOpen} onClose={onClose} sx={modalStyle}>
      <Container sx={containerStyle}>
        <Stack spacing={2}>
          <Typography variant="h6">Create a post</Typography>
          <TextField
            label="Write here your post..."
            variant="outlined"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handlePublish}>
            Publish
          </Button>
        </Stack>
      </Container>
    </Modal>
  );
};

export default AddPostModal;
