import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';

import uploadIcon from '../../assets/img/upload_icon.png'

import componentStyles from "../../assets/theme/components/Inputs/Dropzone"

const useStyles = makeStyles(componentStyles);

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '7px',
  borderWidth: "10px",
  borderRadius: "5px",
  borderColor: '#9575CD',
  borderStyle: 'dashed',
  backgroundColor: '#0E0E13',
  color: '#fff',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  cursor: "pointer",
  height: "170px",
  fontSize: "1rem",
  fontWeight: "500",
  borderImage: "url(/dropzone_dash.png) 10 round",  
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


export default function Dropzone(props) {

  const classes = useStyles();
  const theme = useTheme();

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'audio/*', 
    maxFiles:1
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Box maxWidth="700px" width="100%" margin="auto">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <img alt="upload_icon" src={uploadIcon} width="49px" height="49px"/>
        <p>Choose a file or Drag it here</p>
        <Button variant="contained" className={classes.dropzoneBtn} color="primary" size="middle">Choose a file</Button>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </Box>
  );
}