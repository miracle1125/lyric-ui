import { Box, Button, Chip, CircularProgress, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import type { FC } from 'react';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { SongsApi } from '../../api/Songs.api';
import { Routes } from '../../config/Routes';
import { RequestStatus } from '../../model/RequestStatus';
import { SongAnalyze } from '../../model/SongAnalyze';
import { InputField } from '../atoms/InputField';
import { UploadFile } from '../atoms/UploadFile';

interface Props {
  onSuccess(analyze: SongAnalyze): void;
}

interface FormFields {
  description: string;
  file: File;
  tags: string[];
  title: string;
}

export const UploadForm: FC<Props> = ({ onSuccess }) => {
  const [status, setStatus] = useState(RequestStatus.Pending);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const { handleSubmit, control } = useForm<FormFields>({
    defaultValues: {
      description: '',
      tags: [],
      title: '',
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setStatus(RequestStatus.Loading);
    setErrorMessage('');

    const formData = new FormData();
    formData.append('file', data.file, data.file.name);
    formData.append('title', data.title);
    formData.append('description', data.description);
    data.tags.forEach((tag) => {
      formData.append('tags[]', tag);
    });

    try {
      const result = await SongsApi.upload(formData);
      onSuccess(result);
      setStatus(RequestStatus.Successful);
    } catch (error) {
      setStatus(RequestStatus.Failed);
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.message);
      }
    }
  };

  const isLoading = status === RequestStatus.Loading;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!!errorMessage && (
        <Box marginBottom={2}>
          <Alert severity="error" variant="filled">
            {errorMessage}
          </Alert>
        </Box>
      )}

      {status === RequestStatus.Successful && (
        <Box marginBottom={2}>
          <Alert severity="success" variant="filled">
            Song successfully uploaded
          </Alert>
        </Box>
      )}

      <UploadFile
        control={control}
        name="file"
        rules={{
          required: true,
        }}
      />

      <InputField required control={control} name="title" label="Title" />

      <InputField required multiline rows={4} control={control} name="description" label="Description" />

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
        <Button
          disabled={isLoading}
          startIcon={isLoading ? <CircularProgress color="inherit" size={16} /> : null}
          color="primary"
          size="large"
          type="submit"
          variant="contained"
        >
          Upload
        </Button>
      </Box>
    </form>
  );
};
