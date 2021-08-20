import { Box, Button } from '@material-ui/core';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputField } from '../atoms/InputField';

interface FormFields {
  description: string;
  title: string;
}

export const UploadForm: FC = () => {
  const { handleSubmit, control } = useForm<FormFields>({
    defaultValues: {
      description: '',
      title: '',
    },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField required control={control} name="title" label="Title" />
      <InputField required control={control} name="description" label="Description" />
      <Box component="footer" display="flex" justifyContent="flex-end" marginTop={2}>
        <Button color="primary" size="large" type="submit" variant="contained">
          Upload
        </Button>
      </Box>
    </form>
  );
};
