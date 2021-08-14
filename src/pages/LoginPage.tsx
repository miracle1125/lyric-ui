import { Box, makeStyles, Typography } from '@material-ui/core';
import type { FC } from 'react';
import { AuthLayout } from '../components/molecules/AuthLayout';
import { LoginForm } from '../components/organisms/LoginForm';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
  },
}));

export const LoginPage: FC = () => {
  const classes = useStyles();

  return (
    <AuthLayout>
      <Typography gutterBottom className={classes.title} variant="h1">
        Sign In
      </Typography>
      <Typography gutterBottom variant="h5" color="secondary">
        It is a long established fact that a reader will be distracted by the readable content.
      </Typography>
      <Box marginTop={3}>
        <LoginForm />
      </Box>
    </AuthLayout>
  );
};
