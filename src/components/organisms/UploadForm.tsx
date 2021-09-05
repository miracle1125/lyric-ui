import { Box, Button, Chip, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Autocomplete from '@material-ui/lab/Autocomplete';
import type { FC, KeyboardEvent } from 'react';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../config/Routes';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RequestStatus } from '../../model/RequestStatus';
import { doAnalyze } from '../../redux/analyze.slice';
import { FullscreenOverlay } from '../atoms/FullscreenOverlay';
import { InputField } from '../atoms/InputField';
import { UploadFile } from '../atoms/UploadFile';

interface FormFields {
  description: string;
  file: File;
  tags: string[];
  title: string;
}

export const UploadForm: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { analyze, errorMessage, status } = useAppSelector((state) => state.analyze);
  const { handleSubmit, control, setValue, watch } = useForm<FormFields>({
    defaultValues: {
      description: '',
      tags: [],
      title: '',
    },
  });
  const tags = watch('tags');

  useEffect(() => {
    if (status === RequestStatus.Successful) {
      history.push(Routes.Dashboard);
    }
  }, [history, status]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    dispatch(doAnalyze(data));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key, target } = event;
    if (target instanceof HTMLInputElement) {
      if (key.toLowerCase() === 'tab' && target.value.length > 0) {
        event.preventDefault();
        setValue('tags', tags.concat([target.value]));
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
          <Autocomplete<string, true, false, true>
            freeSolo
            multiple
            id="tags"
            options={[]}
            onKeyDown={handleKeyDown}
            onChange={(_, data) => props.field.onChange(data)}
            renderTags={(value, getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip color="secondary" size="small" variant="outlined" label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => <TextField {...params} margin="normal" variant="outlined" label="Tags" />}
            value={tags}
          />
        )}
      />

      <Box component="footer" display="flex" justifyContent="flex-end" marginTop={2} style={{ gap: 10 }}>
        {Boolean(analyze) && (
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
        )}
        <Button color="primary" size="large" type="submit" variant="contained">
          Upload
        </Button>
      </Box>

      <FullscreenOverlay open={isLoading} />
    </form>
  );
};
