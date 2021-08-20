import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { FC, useCallback } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
  container: {
    border: `2px dashed ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
    transition: 'all 0.2s',
  },
  active: {
    backgroundColor: 'rgba(165,138,213,0.2)',
  },
  input: {
    display: 'none',
  },
}));

export const UploadFile: FC = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('accepted files ', acceptedFiles);
  }, []);
  const { getRootProps, isDragActive } = useDropzone({ onDrop });
  const classes = useStyles();

  return (
    <Box
      {...getRootProps()}
      alignItems="center"
      className={classNames(classes.container, isDragActive && classes.active)}
      display="flex"
      justifyContent="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center" style={{ gap: '10px' }}>
        <CloudUploadIcon color="primary" style={{ fontSize: 60 }} />
        <Typography variant="body1">Choose a file or Drag it here</Typography>
        <label htmlFor="file-upload">
          <Button component="span" color="primary" variant="contained">
            Choose file
          </Button>
        </label>
        <input className={classes.input} id="file-upload" type="file" />
      </Box>
    </Box>
  );
};
