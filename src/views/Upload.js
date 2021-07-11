import React, {useEffect, useState} from "react";
import { useDropzone } from 'react-dropzone';
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// core components
import Header from "../components/Headers/Header";
import Dropzone from "../components/Inputs/Dropzone";
import TagField from "../components/Inputs/TagField";

import themeColors from "../assets/theme/colors";
import componentStyles from "../assets/theme/views/Upload";
import { getMusicInfo } from "../service/api";

const useStyles = makeStyles(componentStyles);

const Upload = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [musicInfo, setMusicInfo] = useState({
    title: '',
    description: ''
  });
  const [tags, setTags] = useState([]);

  const handleChangeInput = (field) => (e) => {
    let value = e.target.value;
    setMusicInfo(prevState => {
      return {...prevState, [field]: value}
    })
  }

  const dropzone = useDropzone({
    accept: 'audio/*', 
    maxFiles:1
  });

  const uploadMusicInfo = () => {
    const bodyFormData = new FormData();
    bodyFormData.append('title', musicInfo.title);
    bodyFormData.append('description', musicInfo.description);
    bodyFormData.append('tags', tags);
    bodyFormData.append('file', dropzone.acceptedFiles[0]);

    getMusicInfo(bodyFormData)
      .then(rlt => {
        localStorage.setItem('musicInfo', JSON.stringify(rlt))
        history.push("/dashboard")
      })
      .catch(err => console.log(err))
  }

  const suggestions = [];

  return (
    <Box position="relative">
      <Header 
      logo={{
        innerLink: "/dashboard",
        imgSrc: require("../assets/img/logo.png").default,
        imgAlt: "logo-image",
      }}
      help={{
        imgSrc: require("../assets/img/help_icon.png").default,
        imgAlt: "help-icon",
      }}
      avatar={{
        imgSrc: require("../assets/img/user_avatar.png").default,
        imgAlt: "user-avatar",
      }}
      />
      <Box className="upload-wrap">
        <Box className="upload-container">
          <Box bgcolor={themeColors.black.main} width="100%">
            <Dropzone {...dropzone}></Dropzone>
            <Box className="upload-input-group">
              <Box mt={5}>
                <Typography variant="h3" className={classes.inputLabel}>Title</Typography>
                <input id="upload_title" className={classes.uploadInput} name="upload_title"  type="text" onChange={handleChangeInput('title')}></input>
              </Box>
              <Box mt={2.5}>
                <Typography variant="h3" className={classes.inputLabel}>Description</Typography>
                <textarea id="upload_des" className={classes.uploadInput} name="upload_des" rows="4" cols="50"  style={{resize: "vertical"}} onChange={handleChangeInput('description')}>
                </textarea>
              </Box>
              <Box mt={2.5} mb={3}>
                <Typography variant="h3" className={classes.inputLabel}>Tags</Typography>
                <TagField initialValue={[]} suggestions={suggestions}  setTags={setTags}/>
              </Box>
              <Box textAlign="right">
                <Button variant="contained" color="primary" className="cancel-btn" size="large">Cancel</Button>
                <Button variant="contained" color="primary" className={classes.uploadBtnn} size="large" onClick={uploadMusicInfo}>Upload</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Upload;
