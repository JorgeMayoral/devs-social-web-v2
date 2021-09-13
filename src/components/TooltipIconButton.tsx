import { IconButton, Tooltip } from '@mui/material';

type TooltipIconButtonProps = {
  children: JSX.Element;
  title: string;
};

const TooltipIconButton = ({
  children,
  title,
  ...props
}: TooltipIconButtonProps) => {
  return (
    <Tooltip title={title}>
      <IconButton>{children}</IconButton>
    </Tooltip>
  );
};

export default TooltipIconButton;
