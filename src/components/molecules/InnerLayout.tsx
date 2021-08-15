import { AppBar, Box, Button, Container } from '@material-ui/core';
import type { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { authSlice } from '../../redux/auth.slice';

export const InnerLayout: FC = ({ children }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth={false}>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(authSlice.actions.logOut());
            }}
          >
            Log Out
          </Button>
        </Container>
      </AppBar>
      <Container maxWidth={false}>
        <Box paddingTop={4}>{children}</Box>
      </Container>
    </>
  );
};
