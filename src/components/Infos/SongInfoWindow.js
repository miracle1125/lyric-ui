import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";

// core components
import SongInfoHeader from "./SongInfoHeader"
import SongInfoTag from "./SongInfoTag"
import SongInfoDetail from "./SongInfoDetail"
import componentStyles from "../../assets/theme/components/Infos/SongInfoWindow";


const useStyles = makeStyles(componentStyles);

export default function SongInfoWindow({ amount }) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Box bgcolor="secondary.main">
      <SongInfoHeader>
      </SongInfoHeader>
      <Divider>
      </Divider>
      <SongInfoTag
        songKey="A minor"
        songBpm="110"
        bpmImg={{
          imgSrc: require("../../assets/img/bpm_icon.png").default,
          imgAlt: "bpm-icon",
        }}
      >
      </SongInfoTag>
      <Divider variant="middle">
      </Divider>
      <SongInfoDetail>
      </SongInfoDetail>
    </Box>
  );
}