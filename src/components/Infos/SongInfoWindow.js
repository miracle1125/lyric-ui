import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';

// core components
import SongInfoTag from "./SongInfoTag"
import SongInfoGraph from "./SongInfoGraph"
import SongInfoDetail from "./SongInfoDetail"
import componentStyles from "../../assets/theme/components/Infos/SongInfoWindow";


const useStyles = makeStyles(componentStyles);

export default function SongInfoWindow({ songInfoTag, songDetail, genres }) {
  const classes = useStyles();
  
  return (
    <Box bgcolor="secondary.main" borderRadius="4px">
      <SongInfoGraph
        genres={genres}
      >
      </SongInfoGraph>
      <Divider>
      </Divider>
      <SongInfoTag
        songInfoTag={songInfoTag}
        bpmImgSrc = {require("../../assets/img/bpm_icon.png").default}
      >
      </SongInfoTag>
      <Divider variant="middle">
      </Divider>
      <SongInfoDetail
        songDetail={songDetail}
      >
      </SongInfoDetail>
    </Box>
  );
}