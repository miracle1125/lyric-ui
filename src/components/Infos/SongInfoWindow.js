import React from "react";

// @material-ui/core components
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';

// core components
import SongInfoTag from "./SongInfoTag"
import SongInfoGraph from "./SongInfoGraph"
import SongInfoDetail from "./SongInfoDetail"

export default function SongInfoWindow({ songInfoTag, songDetail, songInfoGraph }) {
  
  return (
    <Box bgcolor="secondary.main" borderRadius="4px">
      <SongInfoGraph
        songInfoGraph={songInfoGraph}
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