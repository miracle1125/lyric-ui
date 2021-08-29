import { BoxProps } from '@material-ui/core';
import { Box } from '@material-ui/core';
import type { FC } from 'react';

interface Props extends BoxProps {
  name: string;
}

export const GridArea: FC<Props> = ({ children, name, ...rest }) => {
  return (
    <Box {...rest} style={{ gridArea: name }}>
      {children}
    </Box>
  );
};
