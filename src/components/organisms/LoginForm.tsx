import { Box, Button, Link, makeStyles, TextField } from '@material-ui/core';
import type { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  action: {
    fontSize: '20px',
  },
}));

export const LoginForm: FC = () => {
  const classes = useStyles();

  return (
    <form>
      <TextField fullWidth margin="normal" label="Email" variant="outlined" type="email" />
      <TextField fullWidth margin="normal" type="password" label="Password" variant="outlined" />
      <Box textAlign="right" fontSize={16}>
        <Link>Forgot Password?</Link>
      </Box>
      <Box component="footer" marginTop={5}>
        <Button className={classes.action} variant="contained" color="primary" size="large">
          Sign In
        </Button>
      </Box>
    </form>
  );
};
