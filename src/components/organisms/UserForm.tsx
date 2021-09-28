import { Box, Button, Chip, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { UserApi } from '../../api/User.api';
import { GENRE_LIST } from '../../config/Genres';
import { User } from '../../model/User';
import { addOrDelete } from '../../utils/common';
import { InputField } from '../atoms/InputField';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 128,
    height: 128,
  },
  editIcon: {
    fontSize: 14,
    cursor: 'pointer',
  },
}));

interface Props {
  user: User;
}

interface FormFields {
  alias: string;
  email: string;
  firstName: string;
  genres: string[];
  lastName: string;
}

export const UserForm: FC<Props> = ({ user }) => {
  const classes = useStyles();
  const { error, isLoading, mutate } = useMutation(UserApi.update);

  const { handleSubmit, control, setValue, watch } = useForm<FormFields>({
    defaultValues: {
      alias: user.creator_alias,
      email: user.email,
      firstName: user.first_name,
      genres: user.musical_genres.map((genre) => genre.name),
      lastName: user.last_name,
    },
  });
  const [genres] = watch(['genres']);

  const onSubmit: SubmitHandler<FormFields> = ({ alias, email, firstName, genres, lastName }) => {
    mutate({
      ...user,
      creator_alias: alias,
      email: email,
      first_name: firstName,
      musical_genres: genres.map((genre) => ({
        id: GENRE_LIST.map((item) => item.toLowerCase()).indexOf(genre.toLowerCase()),
        name: genre,
      })),
      last_name: lastName,
    });
  };

  const selectGenre = (genre: string) => {
    setValue('genres', addOrDelete(genres, genre));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!!error && (
        <Box marginBottom={2}>
          <Alert severity="error" variant="filled">
            {String(error)}
          </Alert>
        </Box>
      )}

      {/* {!!user.profile_photo_url && (
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={<EditIcon className={classes.editIcon} />}
            color="primary"
            overlap="circular"
          >
            <Avatar
              className={classes.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              src={user.profile_photo_url}
            />
          </Badge>
        </Box>
      )} */}

      <Grid container spacing={1}>
        <Grid item sm={6}>
          <InputField control={control} label="First Name" name="firstName" />
        </Grid>
        <Grid item sm={6}>
          <InputField control={control} label="Last Name" name="lastName" />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item sm={6}>
          <InputField control={control} label="Email" name="email" />
        </Grid>
        <Grid item sm={6}>
          <InputField control={control} label="Creator Alias" name="alias" />
        </Grid>
      </Grid>
      <Box marginTop={2}>
        <Typography variant="h5">Genres of Interest</Typography>
        <Box marginTop={1} display="flex" flexWrap="wrap" style={{ gap: 10 }}>
          {GENRE_LIST.map((genre) => (
            <Chip
              clickable
              color="secondary"
              key={genre}
              label={genre}
              onClick={() => selectGenre(genre.toLowerCase())}
              size="small"
              variant={genres.includes(genre.toLowerCase()) ? 'default' : 'outlined'}
            />
          ))}
        </Box>
      </Box>
      <Box component="footer" marginTop={5}>
        <Button
          color="primary"
          disabled={isLoading}
          size="large"
          startIcon={isLoading ? <CircularProgress color="inherit" size={16} /> : null}
          type="submit"
          variant="contained"
        >
          Save Changes
        </Button>
      </Box>
    </form>
  );
};
