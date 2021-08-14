import { Box, Button, Link, makeStyles, TextField } from '@material-ui/core';
import type { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthApi } from '../../auth/Auth.api';
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
  const { handleSubmit, control } = useForm<FormFields>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormFields> = ({ email, password }) => {
    console.log('on submit ', email, password);
    AuthApi.login(email, password);
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
