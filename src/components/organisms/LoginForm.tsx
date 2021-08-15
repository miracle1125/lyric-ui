import { Box, Button, Link, makeStyles } from '@material-ui/core';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthApi } from '../../auth/Auth.api';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { authSlice, logIn } from '../../redux/auth.slice';
import { InputField } from '../atoms/InputField';

const useStyles = makeStyles((theme) => ({
  action: {
    fontSize: '20px',
  },
}));

interface FormFields {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm<FormFields>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormFields> = ({ email, password }) => {
    dispatch(
      logIn({
        email,
        password,
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField required control={control} name="email" label="Email" type="email" />
      <InputField required control={control} name="password" label="Password" type="password" />
      <Box textAlign="right" fontSize={16}>
        <Link>Forgot Password?</Link>
      </Box>
      <Box component="footer" marginTop={5}>
        <Button className={classes.action} variant="contained" color="primary" size="large" type="submit">
          Sign In
        </Button>
      </Box>
    </form>
  );
};
