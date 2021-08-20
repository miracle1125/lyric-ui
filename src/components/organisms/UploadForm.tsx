import { Box, Button, Chip, TextField } from '@material-ui/core';
import type { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useHistory } from 'react-router-dom';
import { Routes } from '../../config/Routes';
import { InputField } from '../atoms/InputField';

interface FormFields {
  description: string;
  tags: string[];
  title: string;
}

export const UploadForm: FC = () => {
  const history = useHistory();
  const { handleSubmit, control } = useForm<FormFields>({
    defaultValues: {
      description: '',
      tags: [],
      title: '',
    },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log('debug: on submit ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField required control={control} name="title" label="Title" />
      <InputField required control={control} name="description" label="Description" />

      <Controller
        control={control}
        name="tags"
        render={(props) => (
          <Autocomplete
            freeSolo
            multiple
            id="tags"
            options={[]}
            onChange={(_, data) => props.field.onChange(data)}
            renderTags={(value: string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip color="secondary" size="small" variant="outlined" label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => <TextField {...params} margin="normal" variant="outlined" label="Tags" />}
          />
        )}
      />

      <Box component="footer" display="flex" justifyContent="flex-end" marginTop={2} style={{ gap: 10 }}>
        <Button
          onClick={() => {
            history.push(Routes.Dashboard);
          }}
          size="large"
          type="submit"
          variant="contained"
        >
          Cancel
        </Button>
        <Button color="primary" size="large" type="submit" variant="contained">
          Upload
        </Button>
      </Box>
    </form>
  );
};
