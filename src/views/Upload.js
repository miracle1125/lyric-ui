import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

// core components
import Header from "../components/Headers/Header";
import UploadInputGroup from "../components/Inputs/UploadInputGroup";
import Dropzone from "../components/Inputs/Dropzone";

import themeColors from "../assets/theme/colors";
import componentStyles from "../assets/theme/views/Upload";

const useStyles = makeStyles(componentStyles);

const Upload = () => {
  const classes = useStyles();
  const theme = useTheme();
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
        <Box bgcolor={themeColors.black.main} py={8} px={2}>
            <Dropzone></Dropzone>
            <UploadInputGroup>
            </UploadInputGroup>
        </Box>
    </Box>
  );
};

export default Upload;