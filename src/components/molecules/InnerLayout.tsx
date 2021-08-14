import { AppBar, Box, Container } from '@material-ui/core';
import type { FC } from 'react';
import { Logo } from '../atoms/Logo';

export const InnerLayout: FC = ({ children }) => {
  return (
    <Container>
      <AppBar>
        <Logo />
      </AppBar>
      <Box paddingTop={4}>{children}</Box>
    </Container>
  );
};
